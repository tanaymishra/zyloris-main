import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg
                    viewBox="0 0 100 100"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 25 H75 L90 40 V50 H35 L10 25Z" fill="white" />
                    <path d="M90 75 H25 L10 60 V50 H65 L90 75Z" fill="white" />
                    <rect x="75" y="15" width="15" height="15" fill="white" />
                    <rect x="10" y="70" width="15" height="15" fill="white" />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
