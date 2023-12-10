import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  const whyChooseTrainForce = [
    {
      title: "Spersonalizowany Program Treningowy",
      content:
        " Naszą największą zaletą jest indywidualne" +
        " podejście do Ciebie. Każdy nasz klient to " +
        "osobna historia, dlatego nasi doświadczeni trenerzy" +
        " opracują dla Ciebie spersonalizowany plan treningowy," +
        " uwzględniający Twoje cele, umiejętności, ograniczenia i" +
        " preferencje. Nie ma uniwersalnych rozwiązań, dlatego nasze podejście jest dopasowane do Ciebie.",
    },
    {
      title: "Spersonalizowany Program Treningowy",
      content:
        " Naszą największą zaletą jest indywidualne" +
        " podejście do Ciebie. Każdy nasz klient to " +
        "osobna historia, dlatego nasi doświadczeni trenerzy" +
        " opracują dla Ciebie spersonalizowany plan treningowy," +
        " uwzględniający Twoje cele, umiejętności, ograniczenia i" +
        " preferencje. Nie ma uniwersalnych rozwiązań, dlatego nasze podejście jest dopasowane do Ciebie.",
    },
    {
      title: "Spersonalizowany Program Treningowy",
      content:
        " Naszą największą zaletą jest indywidualne" +
        " podejście do Ciebie. Każdy nasz klient to " +
        "osobna historia, dlatego nasi doświadczeni trenerzy" +
        " opracują dla Ciebie spersonalizowany plan treningowy," +
        " uwzględniający Twoje cele, umiejętności, ograniczenia i" +
        " preferencje. Nie ma uniwersalnych rozwiązań, dlatego nasze podejście jest dopasowane do Ciebie.",
    },
    {
      title: "Pełne Zaangażowanie Trenerów",
      content:
        " Nasi trenerzy to pasjonaci fitness, którzy kochają to, co robią. Z nimi nie tylko ćwiczysz, ale również zdobywasz wiedzę na temat zdrowego stylu życia, żywienia i technik treningowych. Dzięki temu nie tylko osiągniesz swoje cele, ale także zrozumiesz, jak dbać o swoje ciało",
    },
    {
      title: "Motywacja i Wsparcie",
      content:
        "Wyzwania treningowe mogą być trudne, ale nie jesteś sam. Nasz zespół trenerów będzie obok Ciebie na każdym etapie, dostarczając Ci wsparcia i motywacji. Razem osiągniemy Twoje cele, a sukces będzie jeszcze bardziej satysfakcjonujący.",
    },
    {
      title: "Dostępność i Elastyczność",
      content:
        "Jesteśmy tu, aby Ci pomóc, niezależnie od Twojego planu dnia. Oferujemy elastyczne godziny treningów, a także opcje treningów online. Bez względu na to, czy jesteś rannym ptaszkiem czy nocnym markiem, mamy opcje dla Ciebie.",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b relative w-full flex-col flex from-indigo-500 to-purple-400 ...">
        <Navbar />
        <div className="mt-14 px-20 w-full justify-center flex">
          <div className="w-full flex flex-row">
            <div className="w-full scale-75 h-[700px] bg-cover bg-no-repeat bg-image1" />
            <div className="w-full pt-20 items-center flex-col flex text-center">
              <p className="text-[50px] font-mono">
                Witaj na stronie TrainForce!
              </p>
              <div className="mt-10 border-2 border-black bg-white bg-opacity-50 px-5 py-2 rounded-lg w-3/4 flex justify-center">
                <p className="font-bold text-[20px]">
                  Jesteśmy przekonani, że zdrowie i kondycja są kluczowymi
                  elementami pełnego, aktywnego życia. Dlatego oferujemy szeroki
                  zakres treningów, które pomogą Ci osiągnąć swoje cele fitness,
                  niezależnie od Twojego poziomu zaawansowania. Nasza pasja to
                  Twoje sukcesy, a nasza oferta to odpowiedź na Twoje potrzeby.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-20 mb-16">
          <div className="w-full">
            <p className="text-[50px]">Dlaczego TrainForce?</p>
            <div className="flex w-full">
              <div className="flex w-full flex-row justify-center gap-x-5 gap-y-5 flex-wrap py-2">
                {whyChooseTrainForce.map((value, index) => (
                  <div
                    className="flex flex-col w-[300px] rounded-lg py-5 bg-indigo-200"
                    key={index}
                  >
                    <p className="px-5 text-center text-3xl">{value.title}</p>
                    <p className="px-5 mt-5 leading-8 text-center">
                      {value.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
