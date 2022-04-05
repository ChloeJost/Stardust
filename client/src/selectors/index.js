import slugify from 'slugify';

export const getSlugByThreadTitle = (title) => {
  const modifiedTitle = title.replace('&', '').replace('_', '-');
  const slug = slugify(modifiedTitle, {
    lower: true,
  });
  return slug;
};

export const getUrlByThreadTitle = (title) => {
  const url = `/forum/${getSlugByThreadTitle(title)}`;
  return url;
};

export const getThreadBySlug = (Threads, slug) => {
  // eslint-disable-next-line arrow-body-style
  const Thread = Threads.find((currentThread) => {
    return getSlugByThreadTitle(currentThread.title) === slug;
  });
  return Thread;
};

export const getThreadsByIds = (ids, Threads) => {
  let selectedThreads = Threads.filter((Thread) => ids.includes(Thread.id));
  selectedThreads = selectedThreads.map((Thread) => Thread.title);
  return selectedThreads;
};
