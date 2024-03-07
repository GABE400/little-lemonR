import Header from "../../components/Header/Header";
import Main from "../../components/Main";

const Home = () => {
  return (
    <>
      <Header
        title='Little Lemon'
        subtitle='Chicago'
        description='We are a family owned Mediterranean restaurant, focused on traditioned recipes served with a modern twist.'
      />

      <div className='container'>
        <Main />
      </div>
    </>
  );
};

export default Home;
