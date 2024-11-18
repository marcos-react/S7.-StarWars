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
      <div className="mx-10"> {/* Margin left and right */}
        <h1 className="text-4xl font-bold mb-6 text-white mt-4">Benvingut/da!</h1>
        <p className="text-lg mb-8 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolorem enim nemo a ea tempore, molestiae facere, asperiores aut maxime molestias quaerat dolorum mollitia perferendis quam magni iusto pariatur earum delectus voluptas quae quos! Non numquam officiis modi nesciunt eveniet debitis praesentium tempora cumque quo laborum accusantium beatae, repudiandae voluptatem, id, doloribus error corrupti cum? Cum sapiente vitae necessitatibus. Odio maxime, molestias perspiciatis aspernatur nemo velit porro recusandae cum enim earum ex necessitatibus nam neque beatae dolorum quam. Architecto, consectetur dolore quaerat, asperiores cum necessitatibus repellat quas reprehenderit totam animi, provident voluptas nemo corrupti nihil assumenda quis ipsam ratione laborum distinctio itaque! Perferendis eius mollitia facilis expedita, reprehenderit est aliquid porro adipisci beatae voluptatum sequi impedit recusandae temporibus? Vitae blanditiis dignissimos unde vero aut magni? Aperiam excepturi obcaecati expedita molestias deleniti earum distinctio consectetur inventore in, dolores enim officiis officia autem repudiandae. Natus suscipit error inventore, dolor et praesentium cumque optio tempore in adipisci magnam perspiciatis ut aspernatur ipsum molestias, neque voluptate necessitatibus? Exercitationem nisi culpa amet veritatis excepturi quis quas et. Labore, eaque quae ab voluptate exercitationem magni placeat nesciunt minima explicabo fugiat aliquam voluptatum. Eos deleniti facilis exercitationem unde consectetur ipsa blanditiis obcaecati quae modi. Aspernatur deserunt nobis perferendis cum repellat vero? Hic recusandae ad iusto quasi commodi suscipit velit eligendi optio possimus, qui placeat numquam amet sapiente architecto culpa, dolore ipsa cumque quisquam. Illo totam nam, voluptatem itaque voluptas magni assumenda voluptatum incidunt dolorem aliquid unde iste quibusdam nemo quisquam nihil esse labore eos reprehenderit consequatur eius amet tempore! Accusantium, dolorum! Quas impedit porro culpa voluptatum deserunt omnis non nulla odio. Dolorum cumque ad ipsa ullam incidunt culpa labore mollitia numquam dolores. Esse itaque officiis expedita! Rem perspiciatis non, eos nihil sunt suscipit. Consequatur enim id quam beatae molestias. Doloribus reiciendis hic voluptatibus, eum aperiam incidunt aliquid.
        </p>
      </div>
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

