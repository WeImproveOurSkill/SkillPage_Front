const useGet = async (url) => {
  try {
    const res = await fetch(url, {
      method: 'GET'
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

const usePost = async (url, newData, jwt) => {
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

const useDelete = async (url, jwt) => {
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

export { useGet, usePost, useDelete };
