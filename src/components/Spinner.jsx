import {Bars} from 'react-loader-spinner';


export const Spinner = ({ loading }) => {
  return (
    <div className='flex items-center justify-center w-full left-0 fixed top-0  h-[100vh]'>
        <Bars
            color='hsl(26, 100%, 55%)'
            width= '200'
            height='200'
            loading={loading}
            size={150}
        />
    </div>
  );
};
