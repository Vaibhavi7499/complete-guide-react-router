import React from "react";
import "./CssLayout.css";
import "../../i18n.js";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector.jsx";

const CssLayout = () => {

  const {t} = useTranslation();
 const {line1} = t("description");

  return (
    // <div className="main-container">
    //   <div className="one">1</div>
    //   {/* <div className='two'>2</div>
    //     <div className='three'>3</div> */}
    //   {/* <div>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
    //     laudantium necessitatibus vel amet fuga mollitia veritatis numquam,
    //     magni maiores officia molestias dignissimos ea! Necessitatibus quaerat
    //     nisi non quas consectetur adipisci excepturi, facere rerum, illum
    //     dolore, laudantium sit. Laborum, quia porro? Unde nisi eaque officiis
    //     voluptatibus cumque distinctio, modi adipisci aperiam deserunt culpa
    //     reiciendis sapiente inventore asperiores officia consectetur quisquam
    //     in, exercitationem ea sunt! Nam itaque tempore iusto sapiente earum,
    //     doloremque perspiciatis laboriosam ducimus error, eveniet excepturi sed
    //     autem ab mollitia at pariatur exercitationem sunt cupiditate nesciunt.
    //     Ducimus, sint a. Quod, atque nihil, reprehenderit quos rem, ad suscipit
    //     inventore dignissimos recusandae natus deleniti tempora veniam aut
    //     aperiam sed labore quam! Aut sint accusamus facilis itaque perferendis
    //     officia, inventore quo! Aspernatur quas neque magnam nihil ad impedit
    //     totam odio perferendis quidem. Doloremque aliquid fuga eius provident!
    //     Aliquam suscipit veniam voluptatibus aspernatur, ratione repellendus
    //     laborum asperiores possimus dolorem obcaecati unde in dignissimos
    //     perspiciatis recusandae quam, quasi magnam similique officia eos
    //     consectetur. Ipsum et vero consequuntur, cum quidem, repudiandae qui
    //     itaque eveniet aut quae facere pariatur quia dolore fugit. Molestiae nam
    //     consectetur aspernatur deleniti officia rem adipisci, corrupti quos
    //     totam, odio dicta impedit quasi minus voluptates similique id amet
    //     tenetur commodi eaque cum ut repellendus mollitia? Aperiam odio id amet
    //     ad, velit obcaecati pariatur ea cum totam maxime in eaque architecto
    //     quibusdam natus vitae quis laborum mollitia voluptatibus. Excepturi
    //     impedit qui tempora tenetur aut provident velit in similique doloribus
    //     voluptate dolores laborum id deleniti reiciendis fuga voluptas, sed est
    //     commodi laboriosam facilis cumque nesciunt ducimus perspiciatis beatae!
    //     Neque facere temporibus, et nemo, nobis voluptatum quia a enim, deleniti
    //     itaque qui? Voluptatum vero, quaerat error aut officiis unde repellendus
    //     dolore? Ut porro obcaecati asperiores fugit ipsam possimus aut.
    //     Excepturi voluptates provident aliquam, nesciunt reiciendis dolore velit
    //     harum cupiditate quisquam quam commodi facere obcaecati consequuntur
    //     ratione quidem qui, animi veniam nostrum laboriosam! Repellat error
    //     ullam nesciunt non nisi quo saepe omnis ut obcaecati. Dicta accusantium
    //     nihil perspiciatis alias placeat sequi, consectetur esse, ut est omnis,
    //     eaque pariatur delectus sed earum aut possimus ab beatae excepturi enim
    //     praesentium facilis eius veniam. Natus, sit, ipsum saepe at ipsa ipsam
    //     quia vitae voluptatem, mollitia iusto maxime unde consectetur sequi
    //     nesciunt hic culpa perspiciatis! Aliquam deserunt non dolorum
    //     consequuntur eum ratione esse cupiditate! Nesciunt animi facere impedit
    //     tenetur adipisci eos, optio incidunt cumque aliquid ipsam velit
    //     eligendi. Nulla voluptatem, ducimus quia assumenda ad ea repellat
    //     tenetur, similique exercitationem adipisci magni consequuntur quas,
    //     officiis animi magnam porro obcaecati! Perspiciatis rem hic culpa fugit,
    //     dolores commodi eligendi repellendus accusantium a, cumque possimus
    //     fugiat exercitationem? Non cumque ipsa animi, rerum, corporis adipisci
    //     quos repellendus voluptates debitis iste hic quia at, nam incidunt rem
    //     repellat illum architecto in accusamus officia magni! Dolores corrupti
    //     suscipit repellendus itaque laudantium aliquid animi sunt neque, quia
    //     inventore, perspiciatis, delectus maiores asperiores fuga? Error qui,
    //     omnis laborum repudiandae, nisi doloribus consequatur dolore quam ut
    //     quas, ab impedit? Iste, consectetur perspiciatis excepturi voluptate
    //     iusto optio dolorem ab alias aliquid quidem voluptatibus labore aut
    //     mollitia officia provident similique minima voluptates totam! Ex,
    //     dolorum hic incidunt atque sit voluptatibus voluptatem labore,
    //     consequatur molestias repudiandae debitis harum perferendis quas tempore
    //     sed. Quis, eveniet alias ratione sint aperiam aspernatur obcaecati
    //     laborum similique, magnam aliquam odio tenetur ad nisi quae, harum
    //     perspiciatis. Quas exercitationem nam tenetur ipsum cumque facilis
    //     quisquam adipisci, sint voluptates? Recusandae quod inventore ex sunt.
    //     Impedit et dignissimos, velit iure aspernatur iste deserunt neque totam?
    //     Facilis, sint illum? Accusantium omnis aliquam libero sed dolorem
    //     voluptates tempora deleniti rem odio cum, harum ipsa consequatur atque
    //     similique, perspiciatis obcaecati tempore animi doloribus tenetur
    //     excepturi assumenda natus quo veritatis. Vitae culpa excepturi quos
    //     itaque iure illo esse minima neque! Velit et vel fugiat voluptas! Minima
    //     vitae modi consequuntur, obcaecati, necessitatibus assumenda deserunt
    //     voluptatibus eos earum eligendi corporis vero sapiente ex totam harum
    //     natus odit hic nesciunt quidem magni molestiae? Magnam accusantium id
    //     odit laboriosam quia voluptatum. Repudiandae quidem libero omnis facere
    //     eveniet totam repellat voluptate, quasi deleniti asperiores sit quos
    //     molestiae rerum veniam pariatur illum dolore, similique dolor officiis
    //     eius reprehenderit voluptates rem doloribus nam. Quis doloribus
    //     excepturi illo placeat blanditiis nisi eaque perspiciatis facere
    //     incidunt quod est ipsa accusamus laborum esse veniam praesentium, rerum
    //     perferendis. Est architecto molestiae sint qui unde iste, repudiandae
    //     ratione quae. Illo voluptatibus iure vitae numquam unde porro? Magnam
    //     facilis deserunt laboriosam quisquam! Error, reiciendis placeat
    //     blanditiis molestiae molestias quas voluptas maxime recusandae obcaecati
    //     illum repellendus accusamus labore eius culpa ut, nihil vel veritatis?
    //     Odit animi autem error neque consequuntur illum nisi quam inventore sunt
    //     labore, nesciunt fugiat quod, deleniti id ullam consequatur tenetur
    //     tempore libero possimus unde aliquid harum sed optio. Ea consequuntur
    //     laudantium, ex iusto aliquid distinctio, deserunt voluptatum perferendis
    //     ipsam voluptatem in consectetur. Aut, dolor qui magni fuga maiores
    //     temporibus ex non labore laudantium, maxime sapiente voluptas aperiam
    //     reiciendis nemo laboriosam totam veritatis nesciunt ipsa. Tempora
    //     corrupti debitis quae, id dignissimos nobis dolor pariatur omnis ea,
    //     autem ipsum? Reprehenderit fugiat et asperiores voluptate possimus, cum
    //     ullam impedit explicabo quibusdam quis cupiditate consequuntur! Unde,
    //     dolorum sed accusantium illo magnam praesentium ex veniam voluptatibus
    //     tempore dicta, eius autem iusto tempora libero exercitationem facilis
    //     eligendi ut? Nisi, corrupti dolorem voluptatibus non accusantium iusto
    //     adipisci doloremque tempora autem harum consectetur provident saepe
    //     animi aperiam consequuntur facere suscipit aliquam, ratione consequatur
    //     aspernatur ipsa minima. Aperiam, molestias amet? Quasi architecto sint
    //     distinctio voluptates placeat fugiat quod, ipsum, dolorum voluptatem
    //     ipsa culpa quidem dolores hic veritatis modi beatae? Soluta aperiam in
    //     accusantium autem laudantium quis, nulla officiis quam reprehenderit
    //     praesentium aliquid nostrum minima amet qui aut asperiores consequuntur
    //     sint. Ipsam aperiam excepturi explicabo odit perspiciatis amet, dolore
    //     totam deleniti facilis quaerat earum similique nostrum, dolorem, saepe
    //     soluta optio. Dolorum, asperiores aliquid quidem veniam nobis sed
    //     inventore? Accusamus, porro pariatur aliquid impedit eveniet asperiores
    //     a odit atque ratione. Asperiores voluptatem quod illo voluptates, quo,
    //     corrupti possimus reprehenderit expedita odio vel quia aliquid, eos
    //     incidunt necessitatibus molestiae cum fuga pariatur dolore accusantium.
    //     Quae itaque, velit eveniet hic error modi vero molestiae officiis omnis
    //     incidunt labore, unde maxime quisquam dolores soluta a tempore delectus
    //     iste quod perferendis?
    //   </div> */}
    // </div>

    <>
    {/* <div className="main-container"> */}
      {/* <div className="one">1</div>
      <div className="two">2</div>
      <div className="three">3</div> */}
      {/* <div className="four">4</div>
      <div className="four">5</div>
      <div className="four">6</div>
      <div className="four">7</div>
      <div className="four">8</div>
      <div className="four">9</div>
      <div className="four">10</div>
      <div className="four">11</div>
      <div className="four">12</div>  */}
    {/* </div> */}

     <LanguageSelector/>
    <h1 className="heading">{t("greeting")}</h1>
    <h2 className="heading">{t("intro")}</h2>
    <h3 className="heading">{line1}</h3>


    </>
  );
};

export default CssLayout;
