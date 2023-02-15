import Link from 'next/link';
import Image from 'next/image';

export default function Movie({ title, releaseDate, posterPath, id }) {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
      <h1>{title}</h1>
      <h2>{releaseDate}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + posterPath}
          width={800}
          height={800}
          alt={title}
          priority
        />
      </Link>
    </div>
  );
}
