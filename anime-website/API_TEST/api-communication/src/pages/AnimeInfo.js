// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add'; // The plus icon
// import FavoriteIcon from '@mui/icons-material/Favorite'; // The heart icon
// import Button from '@mui/material/Button';
// import styles from './anime_info.module.css';
// import Image from 'next/image';
// import characters from './anime_info.json'; // Adjust the path to where your JSON file is located


// export default function AnimeCard() {
//   return (
//     <div>
//       <div className={styles.container}>
//         <div className={styles.image}>
//           <Image src="/139318.jpg" width={300} height={450} alt="Anime Image" />
//         </div>
//         <div className={styles.details}>
//           <div>
//             <h1><b>Shingeki no Kyojin: The Final Season - Kanketsu-hen Zenpen</b></h1>
//             <div>
//                 <p>The fate of the world hangs in the balance as Eren unleashes the ultimate power of the Titans</p>
//                 <p>(Source: Crunchyroll)</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className={styles.container}>
//           <Card sx={{ display: 'flex', width: 300  }}>
//             <CardContent>
//               <Button variant="contained" color="primary" startIcon={<AddIcon />}>
//                 Add to List
//               </Button>
//               <Button variant="contained" color="secondary" startIcon={<FavoriteIcon />}>
//                 Heart
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//         <div className={styles.container}>
//           <Card sx={{ display: 'flex', width: 300  }}>
//             <CardContent>
//               <Typography>
//                 <strong>Format:</strong> Special <br />
//                 <strong>Episodes:</strong> 1 <br />
//                 <strong>Episode Duration:</strong> 1 hour, 1 mins <br />
//                 <strong>Status:</strong> Finished <br />
//                 <strong>Air Date:</strong> Apr 7, 2013 <br />
//                 <strong>End Date:</strong> Sep 28, 2013 <br />
//                 <strong>Season:</strong> Spring 2013 <br />
//                 <strong>Score:</strong> 7.9 <br />
//                 <strong>Studio:</strong> Wit Studio <br />
//                 <strong>Source:</strong> Manga <br />
//                 <strong>Genres:</strong> Action, Drama, Fantasy, Mystery <br />
//               </Typography>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <div className={styles.characters}>
//         <div className={styles.characterList}>
//             {characters.map((character, index) => (
//               <Card key={index} className={styles.characterCard}>
//                 <CardMedia
//                   component="img"
//                   image={character.image} // Image path is taken from the JSON data
//                   alt={character.name}
//                   className={styles.characterImage}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" component="h3">
//                     {character.name}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Voice: {character.actor}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Role: {character.role}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Language: {character.language}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }
