import Image from 'next/image';

const Body = ({language}, props) => {
  return (
    <section className="body-section-container">
          <div className="body-section-item">
              <span className="body-section-image">
                <Image
                  src="/images/poe.png"
                  alt="content"
                  width="300"
                  height="165"
                />
              </span>
              <p className="leading-relaxed text-base">
              {
                language === "spanish" ?
                <>
                Estoy trabajando para publicar mi primera antología, pero tengo más escritas. Más información muy pronto. Mientras tanto <a href="https://arrobaralo.wordpress.com/" target="_blank" rel="noreferrer">haz clic aquí</a> para visitar mi blog de poesía.
                </>
                :
                <>
                I am currently working to publish my first anthology, but I have plenty more written. More information is coming soon. In the meantime, <a href="https://arrobaralo.wordpress.com/" target="_blank" rel="noreferrer">click here</a> to visit my poetry blog.
                </>
              }
              
              </p>
          </div>
          <div className="body-section-item">
              <span className="body-section-image">
                <Image
                  src="/images/fic.png"
                  alt="content"
                  width="300"
                  height="165"
                />
              </span>
              <p className="leading-relaxed text-base">
              {
                language === "spanish" ?
                <>
              He escrito tres novelas, dos obras de teatro, innumerables guiones para series de televisión y películas, además de muchos relatos cortos y cuentos. Por el momento no he publicado nada, pero eso no tardará en cambiar. Hasta entonces <a href="https://arrobaralo.wordpress.com/2021/10/28/en-verano-la-leche-se-toma-hirviendo/"  target="_blank" rel="noreferrer">haz clic aquí</a> para leer mi relato {"En verano la leche se toma hirviendo"}.
              </>
              :
              <>
              I have written three novels, two plays, countless TV series and movie scripts, plus lots of short stories and tales.  I have not published anything yet, but that will not take long to change. Until then <a href="https://arrobaralo.wordpress.com/2021/10/28/en-verano-la-leche-se-toma-hirviendo/"  target="_blank" rel="noreferrer">click here</a> to read my tale {"En verano la leche se toma hirviendo"} in spanish.
              </>
              }
              </p>
          </div>
          <div className="body-section-item">
              <span className="body-section-image">
                  <Image
                    src="/images/crea.png"
                    alt="content"
                    width="300"
                    height="165"
                  />
              </span>
              <p className="leading-relaxed text-base">
              {
                language === "spanish" ?
                <>
                Colaboro con el fotógrafo José García (@jose35mm) en el proyecto Fotografía Imperfecta (@foto8rafia_imp). Soy parte del colectivo de humor NOT YET (@nnnnnotyet) donde a parte de grabar un Podcast y crear contenido gráfico proyectamos ofrecer vídeos muy pronto. <a href="http://www.notyet.es" target="_blank" rel="noreferrer">Haz clic aquí</a> para echarte unas risas.
                </>
                :
                <>
                I collaborate with the photographer José García @ jose35mm in the Imperfect Photography project (@ foto8rafia_imp). I am part of the humor collective NOT YET (@nnnnnotyet) where, apart from recording a Podcast and creating graphic content, we plan to expand the project with videos. <a href="http://www.notyet.es" target="_blank" rel="noreferrer">Click here</a> to have a look.
                </>
              }
              </p>
          </div>
          <div className="body-section-item">
              <span className="body-section-image">
                <Image
                  className=""
                  src="/images/preguntas.png"
                  alt="content"
                  width="300"
                  height="165"
                />
              </span>
              <p className="leading-relaxed text-base">
              {
                language === "spanish" ?
              <>
              Cada paso es una pregunta y cada respuesta cerrada y absoluta algo de lo que huír. Me siento cómodo en la incertidumbre y te invito a que hagas lo mismo. Así que pregúntate y cuestiona cada cosa que te rodea y pregúntame a mí si te apetece. Te prometo no resolver tus dudas mas tampoco defraudarte. Haz clic para enviarme un email a mi dirección <a href="mailto:yosoyralo@gmail.com">yosoyralo@gmail.com</a>
              </> 
              :
              <>
              Each step is a question and each closed and absolute answer is something to flee from. I feel comfortable in the uncertainty and I invite you to do the same. So ask yourself and question everything around you and ask me if you feel like it. I promise not to solve your doubts but neither will I disappoint you. Click to send me an email to my address <a href="mailto:yosoyralo@gmail.com">yosoyralo@gmail.com</a>
              </>
              }
              </p>
          </div>
    </section>
  );
};

export default Body;
