import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shadcn/ui/card';
import { ExternalLink } from 'lucide-react';

export function ProjectCard({ title, description, url, type }) {
  return (
    <Card className='group hover:border-primary/50 transition-all'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-xl font-bold'>{title}</CardTitle>
          <Link
            href={url}
            target='_blank'
            className='text-muted-foreground hover:text-primary transition-colors'>
            <ExternalLink className='h-5 w-5' />
          </Link>
        </div>
        {type && <span className='text-sm text-muted-foreground'>{type}</span>}
      </CardHeader>
      <CardContent>
        <CardDescription className='text-base'>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
