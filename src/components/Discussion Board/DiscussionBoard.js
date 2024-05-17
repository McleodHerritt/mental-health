import React, { useState, useCallback, useEffect } from "react";
import "./DiscussionBoard.css";
// Import React and Firebase functions

const DiscussionBoard = () => {
  const [blogComments, setBlogComments] = useState(() => {
    const stored = localStorage.getItem("blogComments");
    return stored ? JSON.parse(stored) : [];
  });

  const [newComment, setNewComment] = useState("");
  const [replyTexts, setReplyTexts] = useState({});
  const [replyNames, setReplyNames] = useState({});
  const [newUserName, setNewUserName] = useState("");

  const handleInputChange = useCallback((value, type, index) => {
    switch (type) {
      case "newUserName":
        setNewUserName(value);
        break;
      case "newComment":
        setNewComment(value);
        break;
      case "replyText":
        setReplyTexts((prev) => ({ ...prev, [index]: value }));
        break;
      case "replyName":
        setReplyNames((prev) => ({ ...prev, [index]: value }));
        break;
      default:
        break;
    }
  }, []);

  const handleAddComment = useCallback(() => {
    console.log("Attempting to add comment");
    if (newComment.trim()) {
      const newEntry = {
        id: Date.now(),
        text: newComment,
        name: newUserName.trim() || "Anonymous",
        replies: [],
      };
      console.log("Adding new comment:", newEntry);
      setBlogComments((prev) => {
        const updatedComments = [...prev, newEntry];
        console.log("New comments array after adding:", updatedComments);
        return updatedComments;
      });
      setNewComment("");
      setNewUserName("");
    }
  }, [newComment, newUserName]);

  const handleAddReply = useCallback(
    (commentId) => {
      console.log("Attempting to add reply to comment ID:", commentId);
      const replyText = replyTexts[commentId];
      const replyName = replyNames[commentId] || "Anonymous";
      if (replyText && replyText.trim()) {
        console.log("Adding reply:", { replyText, replyName });
        const newReply = {
          id: Date.now(),
          text: replyText,
          name: replyName,
        };
        setBlogComments((current) => {
          const updatedComments = current.map((comment) =>
            comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment
          );
          console.log("Updated comments array after adding reply:", updatedComments);
          return updatedComments;
        });
        setReplyTexts((current) => ({ ...current, [commentId]: "" }));
        setReplyNames((current) => ({ ...current, [commentId]: "" }));
      }
    },
    [replyTexts, replyNames]
  );

  const handleDeleteComment = useCallback((commentId) => {
    setBlogComments((current) => current.filter((comment) => comment.id !== commentId));
  }, []);

  useEffect(() => {
    console.log("Before saving - Current Comments:", blogComments);
    localStorage.setItem("blogComments", JSON.stringify(blogComments));
    console.log("After saving - Saved Comments:", localStorage.getItem("blogComments"));
  }, [blogComments]);

  return (
    <div className="discussion-board">
      <div className="user-input">
        <input
          className="board-input"
          type="text"
          placeholder="Your Name"
          value={newUserName}
          onChange={(e) => handleInputChange(e.target.value, "newUserName")}
        />
        <input
          className="board-input"
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => handleInputChange(e.target.value, "newComment")}
        />
        <button className="post-button" onClick={handleAddComment}>
          Post
        </button>
      </div>
      <h2 className="blog-title">Blog Comments</h2>
      <div className="blog-section">
        {blogComments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p>
              <strong>{comment.name}</strong>: {comment.text}
              <button className="delete-button" onClick={() => handleDeleteComment(comment.id)}>
                Delete
              </button>
            </p>
            {comment.replies.map((reply) => (
              <div key={reply.id} className="reply">
                <p>
                  <strong>{reply.name}</strong>: {reply.text}
                </p>
              </div>
            ))}
            <input
              type="text"
              placeholder="Your name for the reply..."
              value={replyNames[comment.id] || ""}
              onChange={(e) => handleInputChange(e.target.value, "replyName", comment.id)}
            />
            <input
              type="text"
              placeholder="Reply to this comment..."
              value={replyTexts[comment.id] || ""}
              onChange={(e) => handleInputChange(e.target.value, "replyText", comment.id)}
            />
            <button onClick={() => handleAddReply(comment.id)}>Reply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionBoard;
