import '../styles/Home.css';
import bgImage from '../assets/images/dark-mode/bg-image.svg';

const home = () => {
  return (
    <>
      <div className='container'>
        <div className="introduction">
          <h1 className="part1">Andrei Rivera</h1>
          <h2 className="part2">Software Developer</h2>
          <h3 className="part3">I'm a frontend & backend developer,<br/>from Costa Rica, 20 years old, with <br/>more than 1 year of experience.</h3>
        </div>
        <div className="homeImage">
          <img src={bgImage} alt='...'/>
        </div>
      </div>
    </>
  )
}

export default home;