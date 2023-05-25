import { Navbar } from '@/widgets/Navbar';

import { Suspense } from 'react';
import { AppRouter } from '@/app/providers/router';
import { classNames } from '@/shared/lib/classNames/classNames';

function App () {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={''}>
                <Navbar/>
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
