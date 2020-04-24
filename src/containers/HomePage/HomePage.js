// import React from "react";
// import Vader from "../../assets/svg/banner.svg";
// import YouTube from "react-youtube";
// import "./HomePage.css";
//
// const homePage = () => {
//     const _onReady = event => {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//     };
//
//     return (
//         <div className="Home">
//             <div className="Banner">
//                 <img src={Vader} alt="Vader" />
//                 <div className="BannerTextContainer">
//                     <div className="BannerText">Welcome</div>
//                 </div>
//             </div>
//             <br />
//
//             <div className="container">
//                 <h3>
//                     Star Wars is an American epic space-opera media franchise created by
//                     George Lucas.
//                 </h3>
//
//                 <p className="IntroText">
//                     The franchise began with the eponymous 1977 film and quickly became a
//                     worldwide pop-culture phenomenon. The original film, later subtitled
//                     Episode IV – A New Hope, was followed by the sequels Episode V – The
//                     Empire Strikes Back (1980) and Episode VI – Return of the Jedi (1983),
//                     forming what is collectively referred to as the original trilogy. A
//                     prequel trilogy was later released, consisting of Episode I – The
//                     Phantom Menace (1999), Episode II – Attack of the Clones (2002) and
//                     Episode III – Revenge of the Sith (2005). Years later, a sequel
//                     trilogy began with Episode VII – The Force Awakens (2015), continued
//                     with Episode VIII – The Last Jedi (2017), and will conclude with
//                     Episode IX – The Rise of Skywalker (2019). The first eight films were
//                     nominated for Academy Awards (with wins going to the first two
//                     released) and were commercially successful. Together with the
//                     theatrical anthology films Rogue One (2016) and Solo: A Star Wars
//                     Story (2018), the combined box office revenue of the films equates to
//                     over US$9 billion, and is currently the second-highest-grossing film
//                     franchise.
//                 </p>
//
//                 <p className="IntroText">
//                     The film series was expanded into other media, including television
//                     series, video games, novels, comic books, theme park attractions and
//                     themed areas, resulting in an all-encompassing fictional universe. In
//                     2012, Lucas sold his company to Disney, and in 2014, most existing
//  spin-off media was made non-canon and rebranded as "Star Wars
// Legends". The episodic 'Skywalker saga' and the TV series The Clone
// Wars (2008–2014) define the canon, along with most other works
// released after April 2014, though a few Legends-universe media are
// still released, and some Legends characters are sometimes
// re-introduced into the canon, for example the titular character from
// Timothy Zahn's Thrawn trilogy of novels. The franchise holds a
// Guinness World Records title for the "Most successful film
// merchandising franchise." In 2018, the total value of the Star Wars
// franchise was estimated at US$65 billion, and it is currently the
// fifth-highest-grossing media franchise of all-time.
// </p>
//
// <div className="VideoPlayer">
//     <YouTube
// videoId="iXDnFYu91vY"
// opts={{
//     playerVars: {
//         autoplay: 0
//     }
// }}
// onReady={_onReady}
// />
// </div>
// </div>
// </div>
// );
// };
//
// export default homePage;
import React from "react";
import Banner from '../../assets/svg/banner.svg';
import ResearchBar from "../../components/ResearchBar/ResearchBar.js"
import "./HomePage.css";

export default class homePage extends React.Component{

  render() {
      return (
          <div className="Home">
              <div className="BannerImage">
                  <img src={ Banner } alt="banner" />
                  <p className="IntroText">
                      Discover Student Loans aims to optimize the overall student loan conversion
                      by improving the product selection experience. In our MHCI Capstone project,
                      we are interested in investigating what prevents customers from committing
                      to one of Discover’s student loan products? How might we address their needs
                      and concerns?
                  </p>
              </div>
              <div className="Banner">
                  <div className="BannerTextContainer">
                      <div className="BannerText">Do you understand your student loan?</div>
                  </div>
              </div>
              <br/>
              <div className="container">
                  <ResearchBar activeElement="0"></ResearchBar>
              </div>
          </div>
      );
  }

};
