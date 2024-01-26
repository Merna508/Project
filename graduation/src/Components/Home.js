import { faBookmark, faMessage, faMagnifyingGlass, faBell, faEllipsisVertical, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import profile from '../images/profile.jpg';
import owner from '../images/owner.jpg';
import design from '../images/design.jpg'
import notifypic from '../images/notifypic.jpeg';
import notifypic1 from '../images/notifypic1.jpeg';
import notifypic2 from '../images/notifypic2.jpeg';
import notifypic3 from '../images/notifypic3.jpeg';
import React from 'react';
// import withReactContent from 'sweetalert2-react-content'
function Sidebar() {
    // const bookMark= document.querySelector(".edit-book");
    // bookMark.addEventListener("click", ()=>{
    //     console.log("clicked");
    // })
    // const showDiv=()=>{
    //     document.getElementById('Setting').style.display = "block";
    // }
    //  function showNotify() {
    //     document.getElementById('Icon').style.display = "block";
    //  }
    // const changeColor=()=>{
    //     document.getElementsByClassName("category").style.backgroundColor="#7513D6";
    // }
    // const msg=Swal.fire({
    //     title: "Do you want to save the changes?",
    //     showDenyButton: true,
    //     showCancelButton: true,
    //     confirmButtonText: "Save",
    //     denyButtonText: `Don't save`
    //   }).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //       Swal.fire("Saved!", "", "success");
    //     } else if (result.isDenied) {
    //       Swal.fire("Changes are not saved", "", "info");
    //     }
    //   });
    return (
        <>
            <div className='main'>
                <div className='home-section'>
                    <div className='header'>
                        <div className='search'>
                            <form className='frm'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <input type="text" placeholder="Search.." name="search" />
                            </form>
                        </div>
                        <div className='profile'>
                            <p>Registered</p>
                            <div className='profile-img'>
                                <img src={profile} alt="profile" />
                            </div>
                            <div className='icon' id='Icon'>
                                <FontAwesomeIcon icon={faBell} size='2x' />
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='head'>
                            <h1 className='title-head'>Discover Course & Bootcamp</h1>
                            <div className='categories'>
                                <div className='category'>All projects</div>
                                <div className='category'>UI/UX design</div>
                                <div className='category cat-w'>Product Management</div>
                                <div className='category cat-w'>Branding Design</div>
                                <div className='category cat-w'>Mobile Development</div>
                                <div className='category cat-w'>Web Development</div>
                            </div>
                        </div>
                        <div className='projects'>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={owner} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={design} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={owner} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={design} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={owner} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={design} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={owner} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={design} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={owner} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={design} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color' id='heartIcon'>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>

                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={owner} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                        <div className='settings' id='Setting'>
                                            <div className='hide'>Hide</div>
                                            <div className='save'>Save as</div>
                                            <div className='copy'>Copy</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={design} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project'>
                                <div className='owner'>
                                    <div className='owner-img'>
                                        <img src={owner} alt="profile" />
                                    </div>
                                    <p className='owner-name'>Will Kiney</p>
                                    <div className='icon-part'>
                                        <div className='edit edit-book'>
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </div>
                                        <div className='edit edit-delete'>
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </div>
                                    </div>
                                </div>
                                <div className='project-details'>
                                    <p className='project-text'>Lorem spanLoremspan</p>
                                    <div className='project-img'>
                                        <img src={design} alt='project' />
                                    </div>
                                </div>
                                <div className='react'>
                                    <div className='like'>
                                        <div className='icon-color'>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                        <div className='number-section'>
                                            <span>15</span>
                                            <p className='react-text'>Reacts</p>
                                        </div>
                                    </div>
                                    <div className='comment'>
                                        <div className='icon_color'>
                                            <FontAwesomeIcon icon={faMessage} />
                                        </div>
                                        <div className='number-section'>
                                            <span>14</span>
                                            <p className='react-text'>Comments</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='notification'>
                                    <div className='notify-head'>
                                        <p className='notify-title'>Notification</p>
                                        <p className='Mark'>Mark all as read</p>
                                    </div>
                                    <div className='notify-content'>
                                        <div className='notify-img'>
                                            <img src={notifypic} alt='profile' />
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person'>Alex Carpena</p>
                                            <div className='notify-sentence'>
                                                <div className='notify-line'></div>
                                                <div className='notiry-child'>
                                                    <p className='notify-txt'>
                                                        Abeer Mohamed liked your post.
                                                    </p>
                                                    <span className='notify-time'>8 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='notify-content'>
                                        <div className='notify-img'>
                                            <img src={notifypic1} alt='profile' />
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person'>Well Kiney</p>
                                            <div className='notify-sentence'>
                                                <div className='notify-line'></div>
                                                <div className='notiry-child'>
                                                    <p className='notify-txt'>
                                                        Well Kiney commented on your post.
                                                    </p>
                                                    <span className='notify-time'>10 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='notify-content'>
                                        <div className='notify-img'>
                                            <img src={notifypic2} alt='profile' />
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person'>Sara Ahmed</p>
                                            <div className='notify-sentence'>
                                                <div className='notify-line'></div>
                                                <div className='notiry-child'>
                                                    <p className='notify-txt'>
                                                        Sara Ahmed sent you a message.
                                                    </p>
                                                    <span className='notify-time'>18 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='notify-content'>
                                        <div className='notify-img'>
                                            <img src={notifypic3} alt='profile' />
                                        </div>
                                        <div className='notify-text'>
                                            <p className='notify-person'>Alex Carpena</p>
                                            <div className='notify-sentence'>
                                                <div className='notify-line'></div>
                                                <div className='notiry-child'>
                                                    <p className='notify-txt'>
                                                        Mervat Mahear liked your post.
                                                    </p>
                                                    <span className='notify-time'>20 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;