import { useState, useEffect } from "react";
import { Row, Skeleton } from "antd";
import aboutimg from "../../Images/categoryimages/VelocityH.jpg";

const AboutUs = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-us-section">
      <Row align="middle" className="flex justify-center">
        <Row xs={24} md={12}>
          <div className="about-us-image">
            {showSkeleton ? (
              <Skeleton.Image
                active
                style={{ width: "70vw", height: "70vh" }}
              />
            ) : (
              <img
                src={aboutimg}
                alt="Company Logo"
                style={{ maxWidth: "90vw", height: "90vh" }}
                onLoad={() => setShowSkeleton(false)}
              />
            )}
          </div>
        </Row>

        <Row xs={24} md={12}>
          <div className="about-us-content p-10 ">
            <div className="about text-md ">
              <p>
                <br />
                <h1 className="text-3xl font-bold pb-2">Our Story</h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                similique non odit amet vitae facilis iure. Reiciendis maxime
                voluptate dolor dicta ut accusantium quam, deserunt distinctio
                voluptas facere id vel magni, quod temporibus pariatur officiis
                odio possimus ab reprehenderit aperiam. At, voluptatum. In, non
                modi. Eius sint provident quis, sequi voluptatum quidem quisquam
                eaque voluptatibus eos, error, aliquid cupiditate vel deleniti
                neque placeat sapiente ipsum. Ad rem quod quidem optio ratione
                consectetur aut tempore praesentium voluptates saepe tempora
                laborum doloribus inventore quasi beatae, nulla quia odio
                molestias quos. Animi ex dolor dolores repudiandae sit. Dicta
                perferendis eligendi natus explicabo saepe eos sint omnis magnam
                animi autem! Cupiditate magnam odio laborum! Autem labore libero
                quis alias facere. Quia, omnis architecto. Neque necessitatibus
                nulla cum velit porro magni autem laborum ut rem. Numquam
                necessitatibus alias animi possimus nisi corporis delectus nemo,
                facilis ipsa fuga, esse vel nam assumenda? Quasi inventore,
                rerum, eum accusantium nostrum voluptas maxime, nobis facilis
                error dignissimos sequi cumque. Quibusdam rem recusandae id
                alias assumenda quam porro fuga vero officiis distinctio itaque
                ipsam, deserunt facere dolor. Dolore omnis repellendus facilis
                mollitia maxime non, perferendis consequuntur odio dolorem
                delectus harum aliquam quibusdam pariatur dicta? Sapiente autem
                quae corrupti quisquam rem, accusantium voluptatum omnis dolore!
                Corrupti velit incidunt, animi porro in voluptates tempore error
                pariatur alias asperiores. Impedit quasi quisquam, odit aut
                totam aspernatur veritatis cum accusantium, rem quaerat officiis
                saepe pariatur, non est laboriosam voluptates itaque blanditiis
                harum nemo atque? Corrupti vitae quam sed nihil iusto facere
                cupiditate dignissimos laborum!
              </p>
              <br />
              <h1 className="text-3xl font-bold pb-2">Our Beginning</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                porro dolores magni ipsam iusto totam deleniti incidunt laborum
                nesciunt aliquid, dicta neque omnis aperiam quod facilis, atque
                quaerat tenetur ipsa assumenda recusandae. Voluptates,
                blanditiis. Voluptatem, corporis provident praesentium
                recusandae voluptates natus aspernatur molestiae. Animi, placeat
                delectus? Magnam magni odit fugit itaque est nihil amet
                perferendis non maxime dolorum animi quod distinctio delectus id
                laboriosam dolore at iste eaque ea, quisquam ut? Accusamus culpa
                quasi ea, officiis quo minima non, dolore, recusandae aliquid
                incidunt reiciendis vel quae sunt. Ab dolorem laboriosam ullam
                accusantium doloremque provident earum reiciendis assumenda
                aliquid facere possimus quasi quod velit nemo dolore tempora
                dicta repellat ducimus, iure placeat rem nulla? Nobis aut,
                veniam error doloremque inventore vero molestias adipisci
                praesentium sit. Quam voluptate, debitis, accusamus totam
                doloremque in, perferendis quisquam quos deleniti consectetur
                dolore culpa quia maxime. Ab ipsam assumenda optio doloremque
                commodi est quae voluptates asperiores, vero rerum ratione illo
                ea modi nihil repudiandae doloribus laborum sit exercitationem
                placeat! Tempora dolores nulla necessitatibus neque facilis unde
                vitae est consequatur laudantium eaque nemo ipsam veritatis
                nostrum dolor sint assumenda distinctio accusamus harum, ratione
                tenetur officiis fugiat voluptate libero dolore. Magnam,
                doloribus aperiam, inventore rerum quaerat expedita sunt hic
                incidunt fugiat doloremque quae eum. Voluptates ea repellat
                enim, molestias similique ipsam aliquam sed officia quidem!
                Minima nihil dolor optio a iure atque sint eveniet aspernatur
                vitae culpa dolore nesciunt praesentium, in voluptatum nobis
                sapiente, sed esse quisquam necessitatibus, amet placeat! Earum
                molestias maiores obcaecati numquam! Dignissimos, dicta
                molestias!
              </p>
              <br />
              <h1 className="text-3xl font-bold pb-2">Our First Store</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque cumque totam ratione voluptatibus dicta sapiente ut
                alias dignissimos perferendis repellat fugiat numquam, amet
                reprehenderit. Dolor quod magni quaerat optio inventore magnam
                sed provident maxime neque voluptatem ea adipisci culpa, illum
                voluptatum officiis commodi autem, corporis quia minima nesciunt
                aperiam accusantium error fuga! Officiis quis nulla sed dolorum
                ut ex quisquam perferendis, laborum fugiat vitae nostrum,
                deserunt est. Pariatur in sed impedit nobis mollitia nulla
                dignissimos temporibus eligendi voluptas hic rem accusantium
                repudiandae doloremque tempora, nam necessitatibus eum culpa
                placeat omnis nemo quos excepturi neque corrupti id. Soluta enim
                nostrum sint fuga adipisci incidunt eius perspiciatis maiores
                accusantium? Nemo dolorum quo amet quisquam expedita labore hic
                sequi eaque harum aperiam temporibus quas nisi perferendis ullam
                soluta autem ut ex aspernatur aut, incidunt quae tempora. Velit
                amet unde nam quidem deleniti voluptate tempora veritatis magnam
                quae quisquam fuga, laudantium architecto reiciendis aliquid
                voluptatum maiores? Odio, fugiat in quibusdam facilis magni
                molestias inventore, quos eveniet ipsum autem velit, amet fugit
                vitae dolorem consequuntur! Dolores asperiores molestias, quas
                voluptate veniam voluptatibus vel nesciunt deleniti accusamus
                sed ratione excepturi, ea ipsam doloribus, recusandae voluptas
                commodi? Mollitia non magnam corrupti beatae iure esse quis
                aliquid blanditiis minima! Atque fugiat veritatis dolores
                cupiditate illum, sapiente voluptatibus doloribus eius
                laboriosam non, vel ea, repellendus rerum ut quasi asperiores
                iusto quo dolorem veniam id nihil quibusdam quisquam minima. Et
                consectetur, deleniti vitae odit repudiandae, minima vel,
                officia eius adipisci recusandae molestias amet quaerat alias.
                Obcaecati in aspernatur quia consectetur?
              </p>
            </div>
          </div>
        </Row>
      </Row>
    </div>
  );
};

export default AboutUs;
