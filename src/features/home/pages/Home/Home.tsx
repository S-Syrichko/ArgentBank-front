import styles from "./Home.module.scss";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomeItem from "../../components/HomeItem/HomeItem";
import { itemsList } from "../../utils/homeData";

const Home = () => {
  return (
    <main className={styles.home}>
      <HomeHero />
      <section className={styles.homeFeatures}>
        <h2 className="sr-only">Features</h2>
        {itemsList.map((key, index) => (
          <HomeItem
            key={index}
            image={key.image}
            header={key.header}
            content={key.content}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
