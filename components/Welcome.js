import Image from 'next/image';

const Welcome = ({changeLanguage, language}, props) => {
  return (
    <section className="">
        <div className="top-page-container">
          <div className="top-section-container">
            <div className="top-image">
              {/* <Image
                alt="Ralo background"
                className="top-image-image"
                src="/images/1200x500.jpg"
                layout='fill'
              /> */}
            </div>
              <span className="top-flag-spain-image" onClick={() => changeLanguage('spanish')}>
                <Image
                  alt="Ralo background"
                  src="/images/spain.png"
                  width="20"
                  height="15"
                />
              </span>
              <span className="top-flag-uk-image" onClick={() => changeLanguage('english')}>
                <Image
                  alt="Ralo background"
                  src="/images/uk.webp"
                  width="20"
                  height="15"
                />
              </span>
          </div>
          <div className="top-text-container">
            <div className="top-text-left-side">
              <div>
                <Image
                alt="rALo logo"
                className="ralo-logo-rounded"
                src="/images/logo.jpg"
                width="80"
                height="80"
                />
              </div>
              <div>
                <h2>
                rALo
                </h2>
                <div className=""></div>
                <p>
                {
                language === "spanish" ?
                <>
                <div>Poeta -  Escritor - Guionista</div>
                <div>Dramaturgo - Director // <i>Story</i>ador</div>
                </>
                :
                <>
                <div>Poet - Writer - Scriptwriter </div>
                <div>Playwriter - Director // <i>Story</i>ador</div>
                </>
                }
                </p>
              </div>
            </div>
            <div className="top-text-right-side">
              <p className="">
              {
                language === "spanish" ?
              "Soy un hombre nacido y viviendo en España. rALo es el pseudónimo con el que firmo mis propuestas creativas. Me gusta utilizar un pseudónimo porque me ayuda a focalizar y separar esa parte de mi vida del resto. Tanto si te gusta lo que hago como si no, es irrelevante quien sea rALo." 
              :
              " I am a man born and living in Spain. rALo is the pseudonym I use to sign all my creative work. I like to use a pseudonym because it helps me focus all my creative work and separate that part of my life from the rest. Whether you enjoy what rALo has to say or not, it is irrelevant who he is. "
              }
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Welcome;
