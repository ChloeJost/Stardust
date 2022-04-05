export const FETCH_THREADS = 'FETCH_THREADS';
export const SAVE_THREADS = 'SAVE_THREADS';
export const NEW_THREAD = 'NEW_THREAD';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const DISPLAY = 'DISPLAY';
export const NEW_COMMENT = 'NEW_COMMENT';
export const DISPATCH_CURRENT_THREAD = 'DISPATCH_CURRENT_THREAD';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DISPATCH_COMMENT_INFOS = 'DISPATCH_COMMENT_INFOS';

export const fetchThreads = () => ({
  type: FETCH_THREADS,
});

export const dispatchCommentInfos = (id, author) => ({
  type: DISPATCH_COMMENT_INFOS,
  id,
  author,
});

export const deleteComment = () => ({
  type: DELETE_COMMENT,
});


export const dispatchCurrentThread = (id) => ({
  type: DISPATCH_CURRENT_THREAD,
  id,
});

export const saveThreads = (thread) => ({
  type: SAVE_THREADS,
  thread,
});

export const newThread = (title) => ({
  type: NEW_THREAD,
  title,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const display = () => ({
  type: DISPLAY,
});

export const newComment = (text) => ({
  type: NEW_COMMENT,
  text,
});

export const saveComments = (comment) => ({
  type: SAVE_COMMENTS,
  comment,
});

