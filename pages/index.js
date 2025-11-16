import Head from 'next/head';
import { useState } from 'react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { signOut } from 'next-auth/react';

export default function Home({ session }) {
  const [formMessage, setFormMessage] = useState('');
  const [formMessageClass, setFormMessageClass] = useState('col-12 mt-3 text-center text-white');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    try {
      setFormMessage('Sending message...');
      setFormMessageClass('col-12 mt-3 text-center text-white');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setFormMessage(result.message || 'Thank you for your message! We\'ll get back to you soon.');
        setFormMessageClass('col-12 mt-3 text-center text-success');
        form.reset();
      } else {
        setFormMessage(result.message || 'Error sending message. Please try again.');
        setFormMessageClass('col-12 mt-3 text-center text-danger');
      }
    } catch (error) {
      setFormMessage('Error sending message. Please try again.');
      setFormMessageClass('col-12 mt-3 text-center text-danger');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
      </Head>

      {/* Header & Navbar */}
      <header className="bg-dark fixed-top">
        <nav className="container-xxl navbar navbar-expand-lg py-3 bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold fs-3" href="#">Ata Ul Haq</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#skills">SKILLS</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#portfolio">PORTFOLIO</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#about">ABOUT</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#cv">CURRICULUM VITAE</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#contact">CONTACT</a>
                </li>
                <li className="nav-item mx-2">
                  <button className="nav-link text-warning btn btn-link" onClick={() => signOut()}>SIGN OUT</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero d-flex flex-column align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="h1 text-white fw-medium fst-italic">Ata Ul Haq</h1>
          <h2 className="display-3 text-white fw-bold">Data Science and AI/ML<br /> Student</h2>
          <p className="text-white small">{session?.user?.email}</p>
          <a href="#skills" className="btn btn-lg fs-6 fw-medium mt-5 btn-primary p-3">TELL ME MORE</a>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="container py-5" id="skills">
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2>SKILLS</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">Continuously improving my skills and knowledge in the field.</h5>
          </div>
        </div>
        <div className="row d-flex justify-content-between mx-0">
          <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{width: '25rem'}}>
            <i className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-mobile-screen-button"></i>
            <h3 className="mt-4 h4">Computer Vision & Generative AI Development</h3>
            <p className="text-center">Proficient in building AI systems for image, video, and multimodal tasks. Experienced in text-to-image, text-to-video generation, and advanced content moderation using deep learning models.</p>
          </div>
          <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{width: '25rem'}}>
            <i className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-cart-shopping"></i>
            <h3 className="mt-4 h4">Data Science Development</h3>
            <p className="text-center">Proficient in Python, R, and SQL, with expertise in data manipulation, statistical analysis, and machine learning algorithms. Experienced in developing predictive models, data visualization, and building scalable data pipelines for efficient data processing. Familiar with libraries such as Pandas, NumPy, scikit-learn, TensorFlow, and PyTorch.</p>
          </div>
          <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4" style={{width: '25rem'}}>
            <i className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle fa-solid fa-laptop"></i>
            <h3 className="mt-4 h4">Back-end Development</h3>
            <p className="text-center">Skilled in server-side programming using technologies like Node.js and Express, specializing in developing robust APIs for data retrieval and manipulation. Experience working with databases such as MongoDB and MySQL, implementing efficient data storage and retrieval mechanisms. Familiarity with integrating machine learning models into backend systems for real-time data processing and analysis.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container py-5" id="portfolio">
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2>PORTFOLIO</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">
              A collection of AI, data science, and web development projects I&apos;ve worked on.
            </h5>
          </div>

          <div className="row mt-5 mx-0 justify-content-center align-items-stretch">

            {/* Memee – Multi-Modal AI Moderation */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/memee.png" className="img-fluid portfolio-img" alt="Memee AI Moderation" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Memee – AI Content Moderation</h6>
                  <p className="card-text text-secondary small mb-3">
                    FastAPI · TensorFlow · Whisper · EasyOCR <br />
                    Multi-modal pipeline moderating text, images, audio & video for NSFW content, vulgarity, and phone numbers.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti?tab=repositories" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Dental AI */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/DentalAI.jpeg" className="img-fluid portfolio-img" alt="Dental AI" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Dental AI – X-ray Diagnostics</h6>
                  <p className="card-text text-secondary small mb-3">
                    FastAPI · React · YOLOv11 · U-Net · EfficientNet-B4 <br />
                    Detects oral diseases, segments regions of interest, predicts implant feasibility & includes a RAG-based chatbot.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti/Dental_AI" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* NeuroVision AI */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/NeuroVision.jpeg" className="img-fluid portfolio-img" alt="NeuroVision AI" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">NeuroVision AI – Brain Tumor</h6>
                  <p className="card-text text-secondary small mb-3">
                    YOLOv8 · FastAPI · PyTorch · OpenCV <br />
                    MRI-based brain tumor detection web app with real-time inference and custom-trained YOLOv8.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti/BrainTumor_Detection" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Potato Disease Classifier */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/potato_disease.png" className="img-fluid portfolio-img" alt="Potato Disease Classifier" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Potato Disease Classifier</h6>
                  <p className="card-text text-secondary small mb-3">
                    Keras · FastAPI · OpenCV · NumPy <br />
                    CNN-based classifier for Early Blight, Late Blight & Healthy potato leaves with web UI for image upload.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti/Potato_disease_Classification" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Visualization */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/visualisation.jpeg" className="img-fluid portfolio-img" alt="Data Visualization" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Data Visualization & Analytics</h6>
                  <p className="card-text text-secondary small mb-3">
                    Python · Power BI · Matplotlib · Seaborn <br />
                    Exploratory data analysis, KPI dashboards, and custom visualizations for data-driven decision making.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti/PowerBI_Dashboards" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Cryptography */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/cryptography.png" className="img-fluid portfolio-img" alt="Cryptography Project" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Image & Data Cryptography</h6>
                  <p className="card-text text-secondary small mb-3">
                    Python · AES · NumPy · PIL · OpenCV <br />
                    Implements cryptographic operations and image encryption/decryption using AES and custom pipelines.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti?tab=repositories" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Voyage Vista */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/VyageVista.jpeg" className="img-fluid portfolio-img" alt="Voyage Vista" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Voyage Vista – Travel Management</h6>
                  <p className="card-text text-secondary small mb-3">
                    FastAPI · MongoDB Atlas · Jinja2 <br />
                    Travel management system with user/admin auth, package CRUD, and review & feedback modules.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti/Voyage_Vista" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pizza Delivery Management */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/pizza-delivery.jpg" className="img-fluid portfolio-img" alt="Pizza Delivery System" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Pizza Delivery Management</h6>
                  <p className="card-text text-secondary small mb-3">
                    FastAPI · Python · CRUD <br />
                    Backend system for managing orders, customers, and delivery workflow using RESTful APIs.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti?tab=repositories" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tourism Management System */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/tourism-management-system.png" className="img-fluid portfolio-img" alt="Tourism Management System" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Tourism Management System</h6>
                  <p className="card-text text-secondary small mb-3">
                    Python · File Handling · Regex <br />
                    CLI-based tourism management app using structured file storage and regular expressions for validation.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti/Tourism-Management-System" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Website */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/website.png" className="img-fluid portfolio-img" alt="E-commerce Website" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">E-commerce Website</h6>
                  <p className="card-text text-secondary small mb-3">
                    WordPress · WooCommerce <br />
                    Customized e-commerce store with product listing, cart, checkout, and basic SEO optimization.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti?tab=repositories" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Landing Page */}
            <div className="col-lg-3 px-md-3 px-0 col-md-4 col-12 card-wrapper">
              <div className="card mt-4 h-100">
                <img src="/portfolio.png" className="img-fluid portfolio-img" alt="Responsive Landing Page" />
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="card-title">Responsive Landing Page</h6>
                  <p className="card-text text-secondary small mb-3">
                    HTML · CSS · Bootstrap <br />
                    Fully responsive landing page with modern layout, mobile-first design & component-based sections.
                  </p>
                  <div className="d-flex justify-content-center gap-2 mt-auto">
                    <a href="https://github.com/Atasatti?tab=repositories" className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ata-satti/" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5" id="about">
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center">
            <h2>ABOUT</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">Learn more about me, my background, and what motivates me.</h5>
          </div>
        </div>
        <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
          <div className="col-9 col-md-5 text-md-end">
            <h5>2016-2018</h5>
            <h5>Secondary Education System</h5>
            <p>Secondary School Certificate Army Public School FWO (1025/1100, A+)</p>
          </div>
          <div className="col-3 col-md-2 img text-center">
            <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="/SSC.jpeg" alt="img" />
          </div>
        </div>
        <div className="row justify-content-md-end mt-5 pt-5">
          <div className="col-3 col-md-2 img text-center">
            <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="/FG.jpg" alt="img" />
          </div>
          <div className="col-9 col-md-5">
            <h5>2018-2020</h5>
            <h5>Higher Education</h5>
            <p>Higher Secondary School Certificate F.G. Sir Syed College, The Mall, Rawalpindi (943/1100, A+ )</p>
          </div>
        </div>
        <div className="row flex-row-reverse flex-md-row mt-5 pt-5">
          <div className="col-9 col-md-5 text-md-end">
            <h5>2022-Present</h5>
            <h5>Bachelors In Data Science</h5>
            <p>Comsats University of Islamabad <br /> (3.7 GPA)</p>
          </div>
          <div className="col-3 col-md-2 img text-center">
            <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="/Cui.jpeg" alt="img" />
          </div>
        </div>
        <div className="row justify-content-md-end mt-5 pt-5">
          <div className="col-3 col-md-2 img text-center">
            <img className="rounded-circle border border-5 border-dark-subtle img-fluid" src="/future.jpeg" alt="img" />
          </div>
          <div className="col-9 col-md-5">
            <h5>Future</h5>
            <h5>Continuing to Make a Difference</h5>
            <p>In the future, I envision myself as a skilled data scientist, leveraging cutting-edge techniques and technologies to make a meaningful impact in various domains. With a commitment to continuous learning and innovation, I am dedicated to harnessing data to drive actionable insights and solutions, contributing to positive change and advancements in the field</p>
          </div>
        </div>
        <div className="row justify-content-md-center mt-5 pt-5">
          <div className="col-3 col-md-2 d-flex justify-content-center hire-text">
            <h2 className="h4 d-flex justify-content-center align-items-center bg-primary text-white rounded-circle border border-5 border-dark-subtle"><span className="d-none d-md-block">Your<br />Next<br />Hire</span></h2>
          </div>
        </div>      
      </section>

      {/* Contact Section */}
      <section className="py-5" id="contact">
        <div className="container-xxl py-5">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2 className="text-white">CONTACT ME</h2>
            <h5 className="text-white fw-normal py-2 fst-italic">Interested if I&apos;d be the right fit for your team? Fill in this form and I will respond within 24-48 hours.</h5>
          </div>
          <div className="row pt-4 mt-5">
            <div className="col-12">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingInput" name="name" placeholder="Enter Name*" required />
                      <label htmlFor="floatingInput">Enter Name*</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingEmail" name="email" placeholder="Enter Email*" required />
                      <label htmlFor="floatingEmail">Enter Email*</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" id="floatingPassword" name="phone" placeholder="Enter Phone*" required />
                      <label htmlFor="floatingPassword">Enter Phone*</label>
                    </div>
                  </div>
                  <div className="form-floating col-lg-6">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingMessage" name="message" style={{height: '205px'}} required></textarea>
                    <label htmlFor="floatingMessage" className="px-4">Enter Message*</label>
                  </div>
                  <div className="col-12 mt-5 d-flex justify-content-center">
                    <button type="submit" className="btn btn-lg btn-outline-light">SEND MESSAGE</button>
                  </div>
                  {formMessage && (
                    <div id="formMessage" className={formMessageClass}>
                      {formMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container-xxl flex-wrap pt-3 d-flex align-items-center justify-content-center justify-content-md-between">
          <p>Copyright © 2024 Ata Ul Haq</p>
          <ul className="social-icons d-flex">
            <a href="https://github.com/Atasatti" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle" target="_blank" rel="noreferrer"><small><i className="fa-brands fa-github"></i></small></a>
            <a href="https://www.instagram.com/atasatti.16" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle" target="_blank" rel="noreferrer"><small><i className="fa-brands fa-instagram"></i></small></a>
            <a href="https://www.linkedin.com/in/ata-satti/" className="bg-primary mx-2 text-white d-flex align-items-center justify-content-center text-decoration-none rounded-circle" target="_blank" rel="noreferrer"><small><i className="fa-brands fa-linkedin-in"></i></small></a>
          </ul>
        </div>
      </footer>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}