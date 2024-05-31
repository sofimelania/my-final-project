
import Ukraine from '../assets/Ukraine.jpg';

function About(){
  return(
<div className='about'>
  <h1>About</h1>
  <div className="story">
  <ul>
      <li>Ukraine has a rich and diverse culture, reflected in its many symbols.</li>
      <li>Each country has its symbols that are known and recognized in the world. Ukraine is no exception.</li>
      <li>These symbols represent the country's history, traditions, and aspirations.</li>
      <li>Many of Ukraine’s most powerful symbols were born during the nation’s fight for independence throughout its history, and many are known worldwide.</li>
      <li>The national symbols of Ukraine include a variety of official and unofficial symbols and other items that are used in Ukraine to represent what is unique about the nation, reflecting different aspects of its cultural life and history.</li>
      <li>Even in the difficult times of vile Russian aggression, our state produces new and new symbols for itself and the world. Let's remember the postmark with the inscription about the "direction of the Russian ship" or the pink panama hat of the band`s KALUSH lead. Lots of staff now have world-famous inscriptions:" Russian warship .. "," Good evening we are from Ukraine ", and "Glory to Ukraine! Glory to heroes!".</li>
      <li>This is what Ukraine is known for today.</li>
      <li>Now ask yourself, if a war-torn country mourning children and soldiers in ravaged cities can give the world so much light and warmth, isn't it worth saying:</li>
      <li>It is to unite not because of belonging but because of an idea – through symbols and signs.</li>
 </ul>
  </div>
  <div className='form'>
  <img src={Ukraine} alt="Ukraine" width="300px"/>
  </div>
</div>

  )
}
export default About;