import React, { useState, useEffect } from 'react';
import './InstallPWAButton.css'

function InstallPWAButton() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [loadBanner, setLoadBanner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoadBanner(false)
        }, 8000);
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        });
    }, []);

    return (
        <div className={loadBanner ? 'install-banner' : 'install-banner hide-banner'}>
            <span className='install-banner-text'>Do you install this site's app? </span>
            <button className='install-pwa-btn' onClick={() => {
                if (deferredPrompt !== null) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User installed PWA');
                            alert('PWA has been installed!');
                        } else {
                            console.log('User dismissed the PWA installation prompt');
                        }
                        setDeferredPrompt(null);
                    });
                } else if (window.matchMedia('(display-mode: standalone)').matches) {
                    alert('PWA is already installed!');
                }
            }}>
                Install App
            </button>
        </div>
    );
}

export default InstallPWAButton;