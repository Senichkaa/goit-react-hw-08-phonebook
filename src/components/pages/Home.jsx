import { HOneStart } from 'components/App.styled';
export default function Home() {
  return (
    <div>
      <HOneStart>
        Hi! This is your contact book.
        <br />
        Here you can save contacts and find someone you wrote.
        <br />
        Enjoy{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HOneStart>
    </div>
  );
}

// tested
