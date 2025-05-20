export const fetchData = async (endPoint, form = null, action = null) => {
    if ((action === 'PUT' || action === 'DELETE') && form?.id) {
      endPoint = `${endPoint}/${form.id}`;
    }
  
    const OPTIONS = {
      method: ['POST', 'PUT', 'DELETE'].includes(action) ? action : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      ...(form && ['POST', 'PUT'].includes(action) && { body: JSON.stringify(form) })
    };
  
    try {
      const PATH = new URL(SERVER_URL + endPoint);
      const RESPONSE = await fetch(PATH.href, OPTIONS);
  
      if (!RESPONSE.ok) {
        throw new Error(`HTTP error! status: ${RESPONSE.status}`);
      }
  
      const DATA = await RESPONSE.json();
      console.log('RESPONSE', DATA);
      return DATA;
  
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
  