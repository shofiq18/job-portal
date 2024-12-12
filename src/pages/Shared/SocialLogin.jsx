import { useContext } from 'react';
import googleImage from '../../assets/image/google.png'
import AuthContext from '../../Context/AuthContext';

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext);

    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.massage)
        })
    }

    return (
        <div>
            <div className='flex gap-4 items-center my-8 border border-gray-700 p-2 mx-8 rounded-lg justify-center'>
                <img src={googleImage} alt="" />
                <button onClick={handleGoogle} className=''>Google</button>
            </div>
            <div className="divider">OR</div>


        </div>
    );
};

export default SocialLogin;