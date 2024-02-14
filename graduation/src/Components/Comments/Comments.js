import React from "react";
function Comments(){
    const Comments=[{comment_id:1,comment_userid:1,
    comment_content:"great job!",comment_date:"2 hours ago",name:"John Doe",
    profilepicture:"https://www.pexels.com/photo/photo-of-man-sitting-on-chair-1819483/"},
    {comment_id:2,comment_userid:2,
        comment_content:"awsome.",comment_date:"1 hour ago",name:"Maria Michael",
        profilepicture:"https://www.pexels.com/photo/woman-in-collared-shirt-774909/"}];
    return(<div className="commetns">
               {Comments.map(comment=>(<div className="comment">
                <img src={comment.profilepicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.comment_content}</p>
                </div>
                <span>{comment.comment_date}</span>
               </div>))} 
            </div>);
}
export default Comments;