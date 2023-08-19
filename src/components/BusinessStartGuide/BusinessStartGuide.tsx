import * as React from "react";

const BusinessStartGuide = () => {
  return (
    <section className="businessStartGuide">
      <div className="businessStartGuide__wrapper">
        <h4 className="businessStartGuide__title">Wymagania</h4>
        <p className="businessStartGuide__text">
          Co potrzebujesz, aby dołączyć do projektu?
        </p>
        <div className="businessStartGuide__requirements">
          <div className="businessStartGuide__requirement">
            <span className="businessStartGuide__number">1.</span>
            <h5 className="businessStartGuide__heading">
              Musisz mieć ukończone 18 lat
            </h5>
            <p className="businessStartGuide__requirement-text">
              Możliwość grania na giełdzie wiążę się z tym, że musisz być
              pełnoletni, dlatego to warunek konieczny.
            </p>
          </div>
          <div className="businessStartGuide__requirement">
            <span className="businessStartGuide__number">2.</span>
            <h5 className="businessStartGuide__heading">Kapitał na start</h5>
            <p className="businessStartGuide__requirement-text">
              Nie da się rozpocząć z zerowym kapitałem, potrzebujesz choć
              minimalnego wkładu finansowego.
            </p>
          </div>
          <div className="businessStartGuide__requirement">
            <span className="businessStartGuide__number">3.</span>
            <h5 className="businessStartGuide__heading">
              Czas i dostęp do telefonu
            </h5>
            <p className="businessStartGuide__requirement-text">
              Będziesz potrzebował około 2/3h dziennie oraz stały dostęp do
              telefonu w ciagu dnia.
            </p>
          </div>
          <div className="businessStartGuide__requirement">
            <span className="businessStartGuide__number">4.</span>
            <h5 className="businessStartGuide__heading">
              Duże marzenia i cele
            </h5>
            <p className="businessStartGuide__requirement-text">
              Odpowiednie przygotowanie psychiczne to podstawa. Mierz najwyżej
              jak się da.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStartGuide;
