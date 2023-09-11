export const useGet = async (url) => {
  try {
    const res = await fetch(url);

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const usePost = async (url, newData, jwt) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: jwt,
        withCredentials: true
      },
      body: JSON.stringify(newData)
    });

    if (res.ok) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const useImagePost = async (url, newData, jwt) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: jwt,
        withCredentials: true
      },
      body: JSON.stringify(newData)
    });

    if (res.ok) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const usePut = async (url, newData, jwt) => {
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: jwt,
        withCredentials: true
      },
      body: JSON.stringify(newData)
    });

    if (res.ok) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const useDelete = async (url, jwt) => {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: jwt,
        withCredentials: true
      }
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
