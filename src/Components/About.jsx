import React from 'react'
import ab from './about.jpg'


const About = () => {
  return (
    <>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" >
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src={ab}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">Sobre nosotros</h6>
                    <h1 class="mb-4">Bienvenido a Sistema Gestion Educativa</h1>
                    <p class="mb-4">Los estudiantes no aprenden mucho simplemente sentados en clases escuchando a los profesores, memorizando tareas preempaquetadas y escupiendo respuestas. Deben hablar sobre lo que están aprendiendo, escribir reflexivamente sobre ello, relacionarlo con experiencias pasadas y aplicarlo a su vida diaria. Deben hacer de lo que aprenden parte de ellos mismos.</p>
                    <p class="mb-4">It’s Es hora de dar un paso al frente y apasionarse por su trabajo. Comprométase a crear cursos de aprendizaje electrónico que no aburran a las personas, sino que las inspiren y motiven a aprender una nueva habilidad, cambiar un determinado comportamiento o mejorar su desempeño.</p>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Instructores calificados</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Cursos online</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Chatear con los maestros</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Obtenga materiales de estudio</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Tareas semanales</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Auto aprendizaje</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About