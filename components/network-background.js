import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Box } from '@chakra-ui/react'

const NetworkBackground = () => {
  const refContainer = useRef()

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      )
      camera.position.z = 50

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      container.appendChild(renderer.domElement)

      // Particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 70
      const posArray = new Float32Array(particlesCount * 3)
      const velArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100
        velArray[i] = (Math.random() - 0.5) * 0.2
      }

      particlesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(posArray, 3)
      )

      const material = new THREE.PointsMaterial({
        size: 0.5,
        color: 0x81e6d9, // Teal-ish color to match theme
        transparent: true,
        opacity: 0.8
      })

      const particlesMesh = new THREE.Points(particlesGeometry, material)
      scene.add(particlesMesh)

      // Lines
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x81e6d9,
        transparent: true,
        opacity: 0.15
      })

      // Mouse interaction
      let mouseX = 0
      let mouseY = 0

      const onDocumentMouseMove = (event) => {
          mouseX = (event.clientX - window.innerWidth / 2) * 0.1
          mouseY = (event.clientY - window.innerHeight / 2) * 0.1
      }

      document.addEventListener('mousemove', onDocumentMouseMove)

      const animate = () => {
        requestAnimationFrame(animate)

        // Update particle positions
        const positions = particlesGeometry.attributes.position.array

        for (let i = 0; i < particlesCount; i++) {
             positions[i * 3] += velArray[i * 3]
             positions[i * 3 + 1] += velArray[i * 3 + 1]
             positions[i * 3 + 2] += velArray[i * 3 + 2]

             // Boundary check (bounce)
             if (Math.abs(positions[i * 3]) > 50) velArray[i * 3] *= -1
             if (Math.abs(positions[i * 3 + 1]) > 50) velArray[i * 3 + 1] *= -1
             if (Math.abs(positions[i * 3 + 2]) > 50) velArray[i * 3 + 2] *= -1
        }

        particlesGeometry.attributes.position.needsUpdate = true

        // Create lines dynamically
        // Note: Creating new geometry every frame is expensive, but for 70 particles it's fine.
        // Better approach: Pre-allocate a large buffer for lines and update it.
        // For simplicity and stability in this environment, I'll use a slightly different approach:
        // Render lines only if distance < threshold.

        // Actually, let's keep it simple: Just rotate the particle system slightly based on mouse
        particlesMesh.rotation.x += 0.001
        particlesMesh.rotation.y += 0.001

        particlesMesh.rotation.x += (mouseY * 0.0005 - particlesMesh.rotation.x) * 0.1
        particlesMesh.rotation.y += (mouseX * 0.0005 - particlesMesh.rotation.y) * 0.1


        // Draw lines between close particles
        // This part can be heavy if not optimized. Let's skip heavy line drawing for now to ensure performance
        // and just stick to the particles moving and responding to mouse.
        // If the user wants "Plexus", lines are essential. Let's try to add lines efficiently.

        const connectGeometry = new THREE.BufferGeometry()
        const connectPos = []

        for (let i = 0; i < particlesCount; i++) {
            for (let j = i + 1; j < particlesCount; j++) {
                const dx = positions[i * 3] - positions[j * 3]
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
                const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)

                if (dist < 15) {
                     connectPos.push(
                         positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                         positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                     )
                }
            }
        }

        connectGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connectPos, 3))

        // Remove old lines mesh if exists
        const oldLines = scene.getObjectByName('lines')
        if (oldLines) {
            oldLines.geometry.dispose()
            scene.remove(oldLines)
        }

        if (connectPos.length > 0) {
            const linesMesh = new THREE.LineSegments(connectGeometry, lineMaterial)
            linesMesh.name = 'lines'
            // Apply same rotation as particles
            linesMesh.rotation.x = particlesMesh.rotation.x
            linesMesh.rotation.y = particlesMesh.rotation.y
            scene.add(linesMesh)
        } else {
             connectGeometry.dispose() // Dispose if unused
        }

        renderer.render(scene, camera)
      }

      animate()

      const handleResize = () => {
          if(container) {
            camera.aspect = container.clientWidth / container.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(container.clientWidth, container.clientHeight)
          }
      }

      window.addEventListener('resize', handleResize)

      return () => {
        if (container && renderer.domElement) {
            container.removeChild(renderer.domElement)
        }
        document.removeEventListener('mousemove', onDocumentMouseMove)
        window.removeEventListener('resize', handleResize)
        renderer.dispose()
        particlesGeometry.dispose()
        material.dispose()
        lineMaterial.dispose()
      }
    }
  }, [])

  return (
    <Box
      ref={refContainer}
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      zIndex="-1"
      opacity="0.6"
      pointerEvents="none"
    />
  )
}

export default NetworkBackground
