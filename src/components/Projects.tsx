import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import ProjectCard from './ProjectCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projects = [
  {
    title: "Neural Vision Pro",
    description: "Advanced Computer Vision System",
    longDescription: "State-of-the-art object detection and recognition system using YOLOv5 architecture. Capable of real-time processing with high accuracy across multiple object classes.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    tags: ["PyTorch", "Computer Vision", "Deep Learning"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    metrics: {
      accuracy: "98.5%",
      performance: "30 FPS",
      dataset: "1M+ Images"
    }
  },
  {
    title: "AI Conversation Master",
    description: "Advanced NLP Chatbot",
    longDescription: "Cutting-edge conversational AI using transformer architecture. Features context awareness, sentiment analysis, and multi-language support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    tags: ["NLP", "Transformers", "TensorFlow"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    metrics: {
      accuracy: "95%",
      performance: "50ms",
      dataset: "10M+ Dialogues"
    }
  },
  {
    title: "FinanceAI Predictor",
    description: "Financial Market Prediction",
    longDescription: "Advanced time series forecasting system using LSTM networks. Incorporates market sentiment analysis and technical indicators for accurate predictions.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    tags: ["Time Series", "LSTM", "Finance"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    metrics: {
      accuracy: "92%",
      performance: "Real-time",
      dataset: "5 Years Data"
    }
  },
  {
    title: "AutoML Platform",
    description: "Automated Machine Learning System",
    longDescription: "End-to-end AutoML platform for automated model selection, hyperparameter tuning, and deployment. Supports various ML tasks with minimal human intervention.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
    tags: ["AutoML", "MLOps", "Python"],
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    metrics: {
      accuracy: "96%",
      performance: "2x Faster",
      dataset: "Any Size"
    }
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Featured Projects
        </motion.h2>
        
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="!pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;