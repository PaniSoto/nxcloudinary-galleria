import {v2 as cloudinary} from 'cloudinary';
// import process from 'node:process'


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

async function Galeria() {

  const result = await cloudinary.api.resources({
    max_results: 500,
    type: 'upload',
    prefix: 'ejemplos'
  });
  // console.log(result);
  return (
    <>
    <h1>Galería de imágenes</h1>
     {
        result.resources
          .map( r => (
              <img key={r.public_id} src={r.secure_url} 
                   style={{ aspectRatio: r.width / r.height, height: '300px' }}
              />
          ))
     }
    </>
  )
}

export default Galeria