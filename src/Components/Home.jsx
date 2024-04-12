import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Stars from './Stars'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Header.css'
import wave from './darkside.mp4'
import './main.css'
import ab from './about.jpg'
import './search.css'

const baseUrl='http://127.0.0.1:8000/api'

const Home = () => {
  useEffect(()=>{
    document.title='Sistema de Gestion Educativa'
  })

  const icon={
    'font-size':'20px'
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [courseData, setCourseData]=useState([]);
  const [popularcourseData,setPopularcourseData]=useState([]);
  const [popularteacherData,setPopularteacherData]=useState([]);
  const [testData,setTestData]=useState([]);

  useEffect(()=>{
    try{
        axios.get(baseUrl+'/course/?result=3')
        .then((res)=>{
            setCourseData(res.data.results)
        });
    }catch(error){
        console.log(error)
    }

    try{
      axios.get(baseUrl+'/popular-teachers/?popular=1')
      .then((res)=>{
        setPopularteacherData(res.data)
      });
  }catch(error){
      console.log(error)
  }

  try{
    axios.get(baseUrl+'/popular-courses/?popular=1')
    .then((res)=>{
      setPopularcourseData(res.data.results)
    });
}catch(error){
    console.log(error)
}

try{
  axios.get(baseUrl+'/student-test/')
  .then((res)=>{
    setTestData(res.data.results)
  });
}catch(error){
  console.log(error)
}

  },[]);

  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')

  const [searchString,setSearchString]=useState({
    'search':'',
  })

  const handleChange=(event)=>{
    setSearchString({
      ...searchString,
      [event.target.name]:event.target.value
    });
  }

  return (
    <>
      {/* Start Background video player*/}
    <section class="showcase">
    <video src={wave} autoPlay muted loop />
    <div class="overlay"></div>
    <div class="text">
      <h1 className='head'>NUNCA DEJES DE APRENDER.<br/> NUNCA DEJES DE CRECER.</h1>
      <h1 className='headss'>¡APRENDE CON NOSOTROS!</h1>
      <p className='para'>Aprenda del mejor instructor del mundo.  <br/>Conozca las últimas tendencias tecnológicas.</p>
    </div>
    </section>
      {/*  End Background video player*/}
      {/*  Start Features of meetLearning*/}
    <div class="container-xxl py-5" className='space'>
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 class="mb-3">Instructores calificados</h5>
                            <p> Nuestros instructores dicen: <br/>Si estás planificando para un año, siembra arroz; si estás planificando para una década, planta árboles; Si estás planificando para toda la vida, educa a la gente.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 class="mb-3">Cursos online</h5>
                            <p>Las palabras más profundas permanecerán sin leer a menos que puedas mantener al alumno interesado. No puedes ver sus ojos para saber si lo entendieron, así que... dilo, muéstralo, escríbelo, haz una demostración y vincúlalo a una actividad.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 class="mb-3">Tareas de inicio</h5>
                            <p>Preparar a todos nuestros estudiantes para el futuro. Los instructores ofrecen tareas de la mejor calidad para practicar. Tareas que incluyen todos los capítulos. Pregunta para comprender mejor todo el curso.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 class="mb-3">Mejor material de estudio</h5>
                            <p>Con nuestro material de estudio de calidad cualquiera puede lograr su objetivo y con los mejores instructores nada podrá detenerte. En el momento del examen, cualquier estudiante puede consultar el material de estudio y aprobar cualquier examen o entrevista.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/*  End Features of meetLearning*/}
      {/*  About Us card */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" >
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src={ab}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 class="mb-4">Bienvenido al Sistema de Gestión Educativa</h1>
                    <p class="mb-4">Los estudiantes no aprenden mucho simplemente sentados en clases escuchando a los profesores, memorizando tareas preempaquetadas y escupiendo respuestas. Deben hablar sobre lo que están aprendiendo, escribir reflexivamente sobre ello, relacionarlo con experiencias pasadas y aplicarlo a su vida diaria. Deben hacer de lo que aprenden parte de ellos mismos.</p>
                    <p class="mb-4">Es hora de dar un paso al frente y apasionarse por su trabajo. Comprométase a crear cursos de aprendizaje electrónico que no aburran a las personas, sino que las inspiren y motiven a aprender una nueva habilidad, cambiar un determinado comportamiento o mejorar su desempeño. .</p>
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
      {/*  About Us card */}
      <div class="input-box container">
          <i class="bi bi-search text-info"></i>
          <input name='search' type="search" onChange={handleChange} placeholder="Search here..." aria-label="Search" />
          <Link className='button' to={'/search/'+searchString.search} type="button">Buscar</Link>
      </div>

    <div className='container mt-4'>
      {/* Start Latest Courses*/}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp">
                <h6 class="section-title bg-white text-center text-primary px-3">Cursos</h6>
                <h1 class="mb-5">Últimos cursos </h1>
            </div>
            <div class="row g-4 justify-content-center">
            {courseData && courseData.map((course,index) =>
                <div class="col-lg-4 col-md-6 wow fadeInUp">
                    <div class="course-item bg-light">
                        <div class="position-relative overflow-hidden">
                        <Link to={`/detail/${course.id}`}><img src={course.featured_img} height={250}  className="card-img-top" alt={course.title} /></Link>                        </div>
                        <div class="text-center p-4 pb-0">
                            <h5 className="mb-4"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>{course.teacher.full_name}</small>                            <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>{course.total_enrolled_students}</small>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
    <div class="text-center">
    <button type="button" class="btn btn-primary border border-primary"><Link to='/all-courses'className='text-white' >Ver más</Link></button>
    </div>
      {/* ENd Latest Courses*/}
      {/* popular Courses*/}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp">
                <h6 class="section-title bg-white text-center text-primary px-3">Cursos</h6>
                <h1 class="mb-5">Cursos populares</h1>
            </div>
            <div class="row g-4 justify-content-center">
            {popularcourseData && popularcourseData.map((row,index)=>
                <div class="col-lg-4 col-md-6 wow fadeInUp">
                    <div class="course-item bg-light">
                        <div class="position-relative overflow-hidden">
                            <Link to={`/detail/${row.course.id}`}><img src={row.course.featured_img} height={250}  className="card-img-top" alt={row.course.title}/></Link>
                        </div>
                        <div class="text-center p-4 pb-0">
                            <h5 className="mb-4"><Link to={`/detail/${row.course.id}`}>{row.course.title}</Link></h5>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>{row.course.teacher.full_name}</small>
                            <small class="flex-fill text-center border-end py-2"><Stars stars={row.rating}/></small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-eye text-primary me-2"></i>{row.course.course_views}</small>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
    <div class="text-center">
    <button type="button" class="btn btn-primary border border-primary"><Link to='/popular-courses' className='text-white'>Ver más</Link></button>
    </div>
      {/* ENd Popular Courses*/}
      {/* Popular Teacher */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp">
                <h6 class="section-title bg-white text-center text-primary px-3"> Instructores</h6>
                <h1 class="mb-5">Instructores populares</h1>
            </div>
            <div class="row g-4">
            {popularteacherData && popularteacherData.map((teacher,index)=>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                          <Link className='front' to={`/teacher-detail/${teacher.id}`}><img src={teacher.profile_img} height={330} className="card-img-top" alt={teacher.full_name}/></Link>
                        </div>
                        <div class="position-relative d-flex justify-content-center">
                            <div class="bg-light d-flex justify-content-center pt-2 px-1 mt-1">
                            {teacher.insta_url &&
                              <a class="btn btn-sm-square btn-primary mx-1" href={teacher.insta_url}><i class="fab fa-instagram"></i></a>
                            }
                            {teacher.twit_url &&
                              <a class="btn btn-sm-square btn-primary mx-1" href={teacher.twit_url}><i class="fab fa-twitter"></i></a>
                            }
                            {teacher.face_url &&
                              <a class="btn btn-sm-square btn-primary mx-1" href={teacher.face_url}><i class="fab fa-facebook"></i></a>
                            }
                        </div>
                        </div>
                        <div class="text-center p-4">
                        <h4 className="card-title mb-0 "><Link to={`/teacher-detail/${teacher.id}`}>{teacher.full_name}</Link></h4>
                        <p className='mb-0'>{teacher.qualification}</p>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    </div>
      {/* ENd Popular Teacher Courses*/}
      {/* Student Testimonial */}
    <div class="text-center wow fadeInUp">
                <h6 class="section-title bg-white text-center text-primary px-3">¡Qué dicen nuestros estudiantes!</h6>
                <h1 class="mb-5">Testimonio de los estudiantes</h1>
        </div>
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5500}
        showIndicators={false}
      >
      {testData && testData.map((row,i)=>
        <div>
            <img src={row.student.profile_img} />
          <>
          <div className="myCarousel">
            <names>{row.course.fullname}</names>
            <titles>{row.course.title}</titles>
            <p>{row.reviews}</p>
            <a>--{row.student.fullname}</a>
          </div>
          </>
        </div>
        )}
      </Carousel>
    </div>
      {/* ENd Student Testimonial*/}
    </div>
    </>
  )
}

export default Home