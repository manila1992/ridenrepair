import React, { Component } from 'react';

class commentRespond extends Component{
	render(){
		return(
			<>
				<div className="comment-respond" id="respond">
					<h5 className="comment-reply-title" id="reply-title">
						<span className="widget-title">Leave a Reply</span>
					</h5>
					<form className="comment-form" id="commentform" method="post">
						<p className="comment-form-author">
							<label for="author">Name <span className="required">*</span></label>
							<input type="text" value="" name="Author"  placeholder="Author" id="author"/>
						</p>
						<p className="comment-form-email">
							<label for="email">Email <span className="required">*</span></label>
							<input type="text" value="" placeholder="Email" name="email" id="email"/>
						</p>
						<p className="comment-form-url">
							<label for="url">Website</label>
							<input type="text"  value=""  placeholder="Website"  name="url" id="url"/>
						</p>
						<p className="comment-form-comment">
							<label for="comment">Comment</label>
							<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
						</p>
						<p className="form-submit">
							<input type="submit" value="Submit Comment" className="submit" id="submit" name="submit"/>
						</p>
					</form>
				</div>
			</>
		);
	}
}

export default commentRespond;