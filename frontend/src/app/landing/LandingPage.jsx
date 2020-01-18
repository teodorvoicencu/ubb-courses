import * as React from 'react';

import './style/landingPage.scss';
import TeamProfile from './TeamProfile';

const LandingPage = (): React.Node => {
    return (
        <>
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome to UBB Courses!</h1>
                <p className="lead">
                    The aim of this project is to create a friendlier environment for the students
                    to learn during the university.
                </p>
                <hr className="my-4" />
                <br />
                <p className="lead">
                    <a className="btn btn-primary btn-lg" role="button" href="/courses">
                        Explore courses
                    </a>
                </p>
            </div>

            <div className="text-center d-flex justify-content-center">
                <div className="w-50">
                    <p className="lead">About</p>
                    <p>
                        UBB Courses e-learning courses aim to enhance the knowledge and skills of
                        students who want to understand better the materials presented in
                        university.
                    </p>

                    <hr className="my-4" />

                    <p className="lead">What we offer</p>
                    <p>
                        Our project will enable course material upload and organizing them into
                        bite-sized lessons. We aim to support uploading images, videos and other
                        lessons formats. We aim to increase student interactivity with features such
                        as polls, quizzes, and projects such that the students will be able to more
                        easily learn the subjects that matter.
                    </p>

                    <hr className="my-4" />

                    <p className="lead">Team</p>
                </div>
            </div>

            <div className="team d-flex justify-content-center">
                <div className="w-50 d-flex flex-wrap">
                    <TeamProfile name={'Teodor Voicencu'} />
                    <TeamProfile name={'Mihnea Ungureanu'} />
                    <TeamProfile name={'Sebastian Stegaru'} />
                    <TeamProfile name={'Teodor Strut'} />
                    <TeamProfile name={'Nicoleta Ungur'} />
                    <TeamProfile name={'Matei Stroia'} />
                    <TeamProfile name={'Vlad Tugui'} />
                    <TeamProfile name={'Tanko Gabor Tihamer'} />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
