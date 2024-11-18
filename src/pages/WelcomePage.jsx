import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";

function WelcomePage() {
  const navigate = useNavigate();

  const handleStarships = () => {
    navigate("/starships");
  };

  return (
    <div className="bg-black">
      <Header />
      <h1 className="text-4xl font-bold mb-6 text-white mt-4">Benvingut/da!</h1>
      <p className="text-lg mb-8 text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
        natus nostrum. Nesciunt tempora blanditiis quas ipsam deserunt tenetur
        exercitationem voluptates quasi, quidem praesentium esse sed. Impedit
        nobis voluptate maiores officiis ipsum corrupti dolor, quibusdam, est
        iusto voluptates vitae fugit ex. Inventore vero, distinctio, architecto
        minima quos maxime laboriosam qui sequi maiores beatae debitis quis ipsa
        non sed, odio quibusdam molestias delectus adipisci minus reprehenderit?
        Voluptas nihil illum, aliquid sit tenetur consequatur reprehenderit
        corrupti quos, minus officia quas, sequi maiores distinctio? Rerum
        itaque cumque, eum quisquam consectetur explicabo ut optio, numquam
        aspernatur asperiores tenetur qui quas minus est et iure aperiam! Vero
        dolor aliquid quo perspiciatis. Quas vel in velit iste illo soluta iure,
        consequatur consequuntur. Enim, tenetur in totam provident ullam
        eligendi aperiam earum commodi quam laborum cumque pariatur, nemo,
        veritatis amet nostrum nesciunt minus accusantium nisi! Tenetur ipsa
        maiores amet neque, nihil libero inventore, dolor omnis vero fugiat quae
        assumenda possimus cumque tempore facere. Iusto ipsam, vitae
        reprehenderit mollitia maxime ipsum deleniti amet aspernatur! Animi
        expedita atque labore harum rerum perspiciatis aperiam aspernatur ut
        recusandae adipisci iure neque facilis soluta corporis nam error
        eligendi modi ipsam ducimus incidunt aliquam, nemo voluptatem?
        Recusandae reprehenderit placeat praesentium tenetur impedit. Corrupti
        molestias exercitationem maiores. Repellendus aliquam non sint suscipit
        praesentium cupiditate aspernatur, reprehenderit et architecto eligendi
        provident consequatur earum. Unde sequi dolor laudantium nihil cum
        doloribus. Laudantium provident omnis ad soluta quasi quos maxime ab
        repellendus laborum doloribus, expedita cumque magnam cupiditate
        accusantium eius earum sapiente atque nam, voluptate libero consequuntur
        recusandae. Deleniti illo illum deserunt consequuntur reiciendis minima
        mollitia distinctio sunt voluptatibus labore, cum impedit quaerat
        tempora laborum asperiores aliquid officiis ullam cumque? Molestias
        architecto necessitatibus harum quam quo praesentium cumque animi eius
        blanditiis, maxime facilis, earum cum molestiae soluta optio sint.
        Libero vitae corrupti rerum placeat quaerat? Consequuntur, minus fugit!
      </p>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleStarships}
          className="btn btn-primary text-white px-4 py-2 rounded"
        >
          Starships
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
