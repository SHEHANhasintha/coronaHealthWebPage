import React, { Component,useContext,useEffect } from '../../node_modules/react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from  './../header/Header'
import './Body.css'
import './main.js'
import klist from'./klist.gif';
import schema from './3-schema.gif';
import ok from './ok.jpg';

function Body(props){

    const clicked = (e) => {
        e.preventDefault();
    }

  useEffect(function() {
    return function cleanup() {
      //console.log("gggggggggg")
    }
  }, []);

  const items = ['express','nodejs','react',
                'javascript','python','java',  
                'c','cplusplus','bootstrap',
                'html5','css3','webpack',
                'npm','heroku','mysql',
                'github','mongodb','photoshop',
                'illustrator','typescript','restapi',
                'electron','meterialui','strip',
                'pwa','redux','contextapi',
                'aws','jquery','php',
                'seo','ajax','chromedevtools',
                'docker','babel','sass',
                'socketio','mocha','chai',
                'googleauth','passport'
  ]


  /*const videos = ['http://youtube.com/embed/eg6kNoJmzkY?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
                'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
                'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
                'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
                'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
                'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
                'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
                'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
                'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
  ]




  const videoThumbs = ['http://img.youtube.com/vi/eg6kNoJmzkY/0.jpg',
                        'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
                        'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
                        'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
                        'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
                        'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
                        'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
                        'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
                        'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg'
  ]

  const discription = ['Jessica Hernandez &amp; the Deltas - Dead Brains',
                        'Jessica Hernandez &amp; the Deltas - Dead Brains',
                        'Jessica Hernandez &amp; the Deltas - Dead Brains',
                        'Jessica Hernandez &amp; the Deltas - Dead Brains',
                        'Jessica Hernandez &amp; the Deltas - Dead Brains',
                        'Jessica Hernandez &amp; the Deltas - Dead Brains',
                        'Jessica Hernandez &amp; the Deltas - Dead Brains',
                        'Jessica Hernandez &amp; the Deltas - Dead Brains',
                        'Jessica Hernandez &amp; the Deltas - Dead Brains'
  ]
*/


  const videos = [
    {
        vidLocation : 'http://youtube.com/embed/eg6kNoJmzkY?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
        vidThumb : 'http://img.youtube.com/vi/eg6kNoJmzkY/0.jpg',
        vidDiscription : 'Jessica Hernandez &amp; the Deltas - Dead Brains'
    },
    {
        vidLocation : 'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
        vidThumb : 'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
        vidDiscription : 'Barbatuques - CD Tum Pá - Sambalelê'
    },
    {
        vidLocation : 'http://youtube.com/embed/F1f-gn_mG8M?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
        vidThumb : 'http://img.youtube.com/vi/F1f-gn_mG8M/0.jpg',
        vidDiscription : 'Jessica Hernandez &amp; the Deltas - Dead Brains'
    }
  ]

    let i = 0;
    let v = -1;

    return (
        <div >

        <section id="banner" data-video="images/banner">
          <div className="inner">
            <Header/>
            <a href="#main" className="more">Learn More</a>

          </div>

        </section>

        <div id="main">
          <div className="inner">

            <div className="thumbnails">

              <div className="box">
                <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic01.jpg" alt="" /></a>
                <div className="inner">
                  <h3>Nascetur nunc varius commodo</h3>
                  <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                  <a href="https://youtu.be/s6zR2T9vn2c" className="button fit" data-poptrox="youtube,800x400">Watch</a>
                </div>
              </div>

              <div className="box">
                <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
                <div className="inner">
                  <h3>Nascetur nunc varius commodo</h3>
                  <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                  <a href="https://youtu.be/s6zR2T9vn2c" className="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
                </div>
              </div>

              <div className="box">
                <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
                <div className="inner">
                  <h3>Nascetur nunc varius commodo</h3>
                  <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                  <a href="https://youtu.be/s6zR2T9vn2c" className="button style3 fit" data-poptrox="youtube,800x400">Watch</a>
                </div>
              </div>

              <div className="box">
                <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
                <div className="inner">
                  <h3>Nascetur nunc varius commodo</h3>
                  <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                  <a href="https://youtu.be/s6zR2T9vn2c" className="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
                </div>
              </div>

              <div className="box">
                <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
                <div className="inner">
                  <h3>Nascetur nunc varius commodo</h3>
                  <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                  <a href="https://youtu.be/s6zR2T9vn2c" className="button style3 fit" data-poptrox="youtube,800x400">Watch</a>
                </div>
              </div>

              <div className="box">
                <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
                <div className="inner">
                  <h3>Nascetur nunc varius commodo</h3>
                  <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                  <a href="https://youtu.be/s6zR2T9vn2c" className="button fit" data-poptrox="youtube,800x400">Watch</a>
                </div>
              </div>

            </div>

          </div>
        </div>




            <section id="one" className="wrapper ">
                <div className="inner">

                    <div className="inner box ">


                        <div className="inner style2">

                        <h1 className="card__header">YouTube Channel</h1>
                        <p className="card__text">This is my place where I share my Experiance and <strong>knoledge</strong> as video contents. I hope people find my youtube channel as an enjoyable place and mostly benifitial to their currier life.  <a className="link-button" href="http://elwin.vdhazel.com/" target="_blank">This is a link</a></p>


                        <div className="container">

                                <div className="vid-container">
                                    <iframe id="vid_frame" src="http://www.youtube.com/embed/eg6kNoJmzkY?rel=0&amp;showinfo=0&amp;autohide=1" frameBorder="0" width="560" height="315"></iframe>
                                </div>

                                <div className="vid-list-container">
                                    <div className="vid-list">


                                  {
                                    videos.map((value,key) => {

                                        let str =                 
                                        <div key={`${key}`} className='vid-item' location={`${value.vidLocation}`} style={{cursor:'pointer'}} >
                                          <div className='thumb'><img src={`${value.vidThumb}`} location={`${value.vidLocation}`} /></div>
                                          <div className='desc' location={`${value.vidLocation}`} >{`${value.vidDiscription}`}</div>
                                        </div>
                                        
                                        return(str)
                                    })
                                }

                                    </div>
                                </div>

                                <div className="arrows">
                                    <div className="arrow-left"><i className="fa fa-chevron-left fa-lg"></i></div>
                                    <div className="arrow-right"><i className="fa fa-chevron-right fa-lg"></i></div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </section>



            <section id="one" className="wrapper ">
                <div className="inner">

                    <div className="blog box ">


                        <div className="inner style2">

                        <h1 className="card__header">Work Experiance</h1>
                        <p className="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.  <a className="link-button" href="http://elwin.vdhazel.com/" target="_blank">This is a link</a></p>

                            <section id="cd-timeline" className="cd-container">

                                    <div className="cd-timeline-block">
                                        <div className="cd-timeline-img cd-picture">
                                        </div>

                                        <div className="cd-timeline-content">
                                            <h2>Penta Consulting</h2>
                                    <div className="timeline-content-info">
                                      <span className="timeline-content-info-title">
                                        <i className="fa fa-certificate" aria-hidden="true"></i>
                                        Front End Developer
                                      </span>
                                      <span className="timeline-content-info-date">
                                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                        June 2016 - Present
                                      </span>
                                    </div>
                                            <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
                                    <ul className="content-skills">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Wordpress</li>
                                    </ul>
                                        </div> 
                                    </div> 


                                    <div className="cd-timeline-block">
                                        <div className="cd-timeline-img cd-picture">
                                        </div>

                                        <div className="cd-timeline-content">
                                            <h2>Penta Consulting</h2>
                                    <div className="timeline-content-info">
                                      <span className="timeline-content-info-title">
                                        <i className="fa fa-certificate" aria-hidden="true"></i>
                                        Front End Developer
                                      </span>
                                      <span className="timeline-content-info-date">
                                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                        June 2016 - Present
                                      </span>
                                    </div>
                                            <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
                                    <ul className="content-skills">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Wordpress</li>
                                    </ul>
                                        </div> 
                                    </div>  

                                </section> 
                        </div>
                    </div>
                </div>
            </section>




{/*it the blog section*/}

            <section id="one" className="blog-section">
                <div className="inner">
                    <div className="inner box">
                        <h1 className="card__header">Blog</h1>
                        <p className="card__text discription_card">I have a my own<strong> Programming Blog </strong>and It's where one of the sources that I share my programming knoledge. There I have articles on various different topics regarding to IT,Programming and specially in data structures and algorithms. That helps me to keep remember what i did in the past and also I hope my blog helps for those who are also studing and looking for more information about technology.<a className="link-button" href="https://medium.com/@shehanPW" target="_blank">Learn More</a></p>

                        <div className="inner stylenonback style2">


                        <div className="grid">
                          <div className="grid__item">
                            <div className="card"><img className="card__img" src={klist} alt="Snowy Mountains"/>
                              <div className="card__content">
                                <h1 className="card__header">Remove K From List</h1>
                                <p className="card__text"><strong>Remove K From List</strong> — codesignal Algorithms problem regarding <strong>Linked Lists</strong></p>
                                <button className="card__btn" type="submit" href="https://medium.com/@shehanPW/remove-k-from-list-codesignal-algorithms-problem-regarding-linked-lists-897a3f39e48f" target="_blank">Explore <span>&rarr;</span></button>
                              </div>
                            </div>
                          </div>
                          <div className="grid__item">
                            <div className="card"><img className="card__img" src={schema} alt="Desert"/>
                              <div className="card__content">
                                <h1 className="card__header">Logical data independence and physical data independence</h1>
                                <p className="card__text">Logical data independence is when external schema <strong>does not get effected</strong> when changing the conceptual schema. There is no relationship between external database schema and conceptual database schema.</p>
                                <button type="submit" href="https://medium.com/@shehanPW/logical-data-independence-and-physical-data-independence-716bee93d225" target='_blank' className="card__btn">Explore <span>&rarr;</span></button>
                              </div>
                            </div>
                          </div>
                          <div className="grid__item">
                            <div className="card"><img className="card__img" src={ok} alt="Canyons"/>
                              <div className="card__content">
                                <h1 className="card__header">Three Schema Architecture</h1>
                                <p className="card__text"><strong>Three Schema Architecture</strong>.Database schema in a database is described as the framework of tables or as where the skeleton of how each table speeded. Databases schema is essentially ...</p>
                                <button className="card__btn">Explore <span>&rarr;</span></button>
                              </div>
                            </div>
                          </div>
                        </div>



                        </div>
                    </div>
                </div>
            </section>




            <section id="one" className="blog-section">
                <div className="inner">
                    <div className="blog box">
                        <h1 className="card__header">Education and recommandation letters</h1>
                        <p className="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.  <a className="link-button" href="http://elwin.vdhazel.com/" target="_blank">This is a link</a></p>

                        <div className="inner stylenonback style2">

                        <p className="card__text write-text drop-cap discription_card">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit scelerisque sem, nec auctor libero. Cras non condimentum neque, quis porttitor sapien. Curabitur convallis congue tortor. Vestibulum tempus ipsum magna, at efficitur dui cursus vitae. Praesent ac mi vitae diam tristique aliquet. Quisque nec neque purus. Donec maximus pellentesque ligula non luctus.

Nullam ac odio id augue tempor tincidunt. Aliquam sed ante elit. Quisque rutrum commodo lacinia.<br/>
 Cras auctor ultrices nulla, et suscipit turpis. Ut imperdiet sed felis at hendrerit. Nullam nec aliquet massa, non ornare justo. Praesent rutrum ante quis odio tristique pulvinar. Aenean hendrerit volutpat pharetra. Etiam auctor eros vitae dui pulvinar, sed rutrum velit scelerisque. Aliquam non faucibus enim, faucibus molestie libero. Duis ut eros eu sem ultricies placerat et ac dolor. Ut eu quam ornare, vehicula mi at, pellentesque elit. Integer ultrices tortor eget scelerisque facilisis. Sed euismod convallis orci et gravida.

In non facilisis elit. Pellentesque erat augue, imperdiet et est at, mattis maximus dui. Proin mollis lorem a iaculis scelerisque. Vivamus at euismod orci, eget sodales arcu. Phasellus quis justo id eros tincidunt porttitor a eget magna. Curabitur blandit euismod turpis, nec ultrices quam suscipit at. Etiam pulvinar congue elit vel pharetra. Sed libero enim, facilisis et auctor eget, lobortis nec enim. Etiam finibus elit sit amet felis consequat aliquam. Etiam eget iaculis tellus. Integer aliquet sodales nunc, placerat tempor elit. Nam aliquet diam ut mi euismod viverra. Proin in mattis sapien. Mauris in magna vel augue dictum tincidunt. In viverra quis sem nec pharetra. Phasellus felis leo, lacinia eu tincidunt id, mollis id libero.

In imperdiet augue sit amet urna posuere luctus. Ut viverra quam ipsum, sed tristique justo malesuada in.<br/>
 Integer ipsum urna, pulvinar non pulvinar quis, dignissim a diam. Nullam luctus odio sed viverra dictum. Curabitur sagittis purus a dapibus bibendum. Cras vulputate nibh mi, sed tincidunt magna finibus a. Cras luctus fringilla mauris a sagittis. Pellentesque laoreet iaculis blandit. Suspendisse ut ipsum in sem commodo mollis sed ut neque. Suspendisse at augue ac mi hendrerit venenatis. Nullam eget dapibus nisi.

Integer a purus a felis laoreet ullamcorper. Fusce efficitur nisl nunc, non molestie dolor convallis non. Ut molestie lacus nec ipsum interdum, non cursus magna placerat. Fusce vehicula tellus mauris, nec interdum leo pellentesque at. Proin viverra mauris sed feugiat venenatis. Nullam lacinia massa non lacus dictum volutpat. Phasellus pellentesque placerat urna, ut gravida neque sollicitudin quis.
                        </p>

                        </div>
                    </div>
                </div>
            </section>





            <section id="one" className="blog-section">
                <div className="inner">
                    <div className="inner box">
                        <h1 className="card__header">Familier technologies</h1>
                        <p className="card__text discription_card">I learnt many technologies and used them in many different occations. These are some of them layed down here. My most familier Programming langage is JavaScript and I have been using node,React and express and, more JavaScript related web technologies through out the years, also I am familier with developing andoid mobile applications. I am comfortable to say that, I am capable of piking up any web or mobile technology pretty quickly by now, since many of the common tools and technologies based on <strong>MVC Architecture</strong> in order to develop applications for web and mobile.</p>

                        <div className="flex-container">
                          {
                            items.map((value,key) => {
                                if ((i % 6) == 0){
                                    v++;
                                    i=0;
                                }
                                let str = <div key={key}><div className={`badge ${value}`} style={{background:`url('images/iconset.png') ${i*-110}px ${v*-110}px`}}></div></div>
                                i++;
                                return(str)
                            })
                        }
                        </div>
                    </div>
                </div>
            </section>



            <section id="two" className="blog-section">
                <div className="inner">
                    <div className="blog box">
                        <h1 className="card__header">Recommandations</h1>
                        <p className="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.  <a className="link-button" href="http://elwin.vdhazel.com/" target="_blank">This is a link</a></p>

<div className="grid-recon style2">


<div className="card-container-me">
  <span className="pro">Offline</span>
  <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
  <h3>Ricky Park</h3>
  <h6>New York</h6>
  <p>User interface designer and <br/> front-end developer</p>
  <div className="buttons">
    <button className="primary">
      Message
    </button>
    <button className="primary ghost">
      Following
    </button>
  </div>
  <div className="skills">
    <h6>Skills</h6>
    <ul>
      <li>UI / UX</li>
      <li>Front End Development</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </div>
</div>


<div className="flex-ot">
  <div>











<div className="plx-card gold">
  <div className="pxc-bg" style={{backgroundImage:"url('https://i.gyazo.com/a846fc87cca5ebd3942ae1e038bb5083.png')"}}>  </div>
  <div className="pxc-avatar"><img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP4312-CUSA07658_00-AV00000000000049/1536930670000/image?w=240&amp;h=240&amp;bg_color=000000&amp;opacity=100&amp;_version=00_09_000"/></div>
  <div className="pxc-stopper">   </div>
  <div className="pxc-subcard">
    <div className="pxc-sub"> Thiss probably should be called tagline instead. Thiss probably should be called tagline instead. Thiss probably should be called tagline instead.
      Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.
    </div>
  </div>
</div>














  </div>
  <div>




<div className="plx-card gold">
  <div className="pxc-bg" style={{backgroundImage:"url('https://i.gyazo.com/a846fc87cca5ebd3942ae1e038bb5083.png')"}}>  </div>
  <div className="pxc-avatar"><img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP4312-CUSA07658_00-AV00000000000049/1536930670000/image?w=240&amp;h=240&amp;bg_color=000000&amp;opacity=100&amp;_version=00_09_000"/></div>
  <div className="pxc-stopper">   </div>
  <div className="pxc-subcard">
    <div className="pxc-sub"> Thiss probably should be called tagline instead. Thiss probably should be called tagline instead. Thiss probably should be called tagline instead.
      Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.
    </div>
  </div>
</div>






  </div>
</div>

</div>

                    </div>
                </div>
            </section>









 

        <footer id="footer">
          <div className="inner">
            <h2>Shehan PW</h2>
            <p>Success is the sum of small efforts repeated day in and day out. </p>

            <ul className="icons">
              <li><a href="https://linkedin.com/in/shehanhasintha/" className="icon style2 fa-linkedin"><span className="label">500px</span></a></li>
              <li><a href="https://github.com/SHEHANhasintha" className="icon style2 fa-github"><span className="label">Email</span></a></li>
              <li><a href="https://twitter.com/EkanShehan" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="https://www.facebook.com/shehan.hasintha.9" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="https://www.instagram.com/shehanhasintha" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="mailto:shehan.hasintha.ekanayake@gmail.com?subject = Feedback&body = Message" className="icon fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <p className="copyright">&copy; Shehan PW 2020.</p>
          </div>

        </footer>
        </div>
        
    );
  
}

export default Body;


