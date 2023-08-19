import * as React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__wrapper">
        <div className="about__content">
          <p className="about__title">Poznaj mnie</p>
          <h3 className="about__heading">Jak to się wszystko zaczęło?</h3>
          <p className="about__text">
            Mam na imię Magda, aktualnie mam 26 lat. Ponad rok temu ukończyłam
            studia uzyskując tytuł magister inżynier. Ale co z tego? Od razu po
            zakończeniu nauki poszłam do pracy na etacie i wtedy dotarło do
            mnie, że to nie jest to, co chcę robić przez resztę życia.
          </p>
          <p className="about__text">
            Od kiedy skończyłam 18 lat, podejmowałam się prac sezonowych i
            fizycznych, bo uważałam, że ciężką pracą wiele osiągnę. Po studiach
            zostałam uświadomiona na jakim poziomie są zarobki na polskim rynku
            pracy i już wtedy wiedziałam, że będę musiała poszukać innego
            rozwiązania, aby osiągnąć swoje cele.
          </p>
          <p className="about__text">
            Zawsze zastanawiałam się, skąd ci młodzi ludzie na social mediach
            mogą pozwolić sobie na podróże, drogie auta czy po prostu na
            wszystko, na co mają ochotę. I pewnego dnia, podczas scrollowania
            trafiłam na profil dziewczyny, która pokazywała jak{" "}
            <span>można zarabiać online</span> i zdecydowałam się do niej
            odezwać.
          </p>
          <p className="about__text">
            Takim sposobem już od paru miesięcy zajmuję się prowadzeniem biznesu
            online oraz pomagam innym zacząć go od przysłowiowego zera.
          </p>
        </div>
        <div className="about__images">
          <div className="about__image" />
        </div>
      </div>
    </section>
  );
};

export default About;
