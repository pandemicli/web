import React, { FunctionComponent } from 'react'

export const Spinner: FunctionComponent = () => (
  <>
    <div className="spinner" />
    <style jsx>{`
      .spinner {
        animation: spinner 1s linear infinite;
        border-radius: 100%;
        border: 0.125rem solid #4caf50;
        border-top-color: transparent;
        height: 2rem;
        width: 2rem;
      }

      @keyframes spinner {
        from {
          transform: rotate(0deg);
        }

        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </>
)
