import mainStyles from './Main.module.scss'
import foto1 from '../../assets/snowy-mountain-peak-starry-galaxy-majesty-generative-ai.jpg'
import foto2 from '../../assets/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background.jpg'
import foto3 from '../../assets/field-surrounded-by-rocks-covered-greenery-blue-sky-sunlight-italy.jpg'
import foto4 from '../../assets/pretty-cloudscape.jpg'
import noFoto from '../../assets/6605525.jpg'
import Card from './CardMain.jsx'
const posts = [
    {
      id: 1,
      title: "Universo e Terra ",
      image: `${foto1}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["Fantasy"],
      published: true,
    },
    {
      id: 2,
      title: "Tutti al mare",
      image: `${foto2}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["Estate", "Mare"],
      published: true,
    },
    {
      id: 3,
      title: "Montagna e verde",
      image: `${foto3}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["Montagna", "Natura"],
      published: true,
    },
    {
      id: 4,
      title: "Il blu del cielo",
      image: `${foto4}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["Aria pulita"],
      published: false,
    },
    {
        id: 5,
        title: "Foto casuali",
        image: `https://picsum.photos/300`,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["Casuale", "Random"],
        published: false,
      },
      {
        id: 5,
        title: "Senza foto",
        image: `${noFoto}`,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["Trapezio"],
        published: true,
      },
    
  ];

const Main = () => {
    return (
        <main className={mainStyles.bgMain}>
            <div class="container">
                <div class="row">
                    {posts.map((p, index) => (
                            <Card 
                                key={`${index}`}
                                id={p.id}
                                title={p.title}
                                image={p.image}
                                content={p.content}
                                tags={p.tags}
                                published={p.published}
                            />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Main;