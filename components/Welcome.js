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
              "rALo es un pseudónimo con el que he decidido firmar todo mi trabajo creativo. Soy un hombre nacido en el 82 heterosexual y Español. ¿Por qué utilizar un pseudónimo? Por esconderme un poco. Por focalizar mi creatividad. Porque tanto si te importa lo que rALo tiene que decir como si no, es irrelevante quien sea. Por todo eso y por todo lo contrario, elige tu opción." 
              :
              "rALo is the pseudonym I have decided to use to sign all my creative work. I am a man born in 82 heterosexual and Spanish. Why use a pseudonym? To hide a little. To focus my creativity.  Because whether you care what rALo has to say or not, it is irrelevant who he is. Or just because, take your pick."
              }
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Welcome;
