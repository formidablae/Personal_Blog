import { animate, style, transition, trigger } from '@angular/animations';

export const postsAnimation = trigger(
  'postsAnimation',
  [
    transition(
      ':enter',
      [
        /* initial */
        style(
          {
            transform: 'translateY(100%)',
            opacity: 0
          }
        ),
        /* final */
        animate(
          '1s cubic-bezier(0.8, -0.6, 0.2, 1.5)',
          style(
            {
              transform: 'translateY(0)',
              opacity: 1
            }
          )
        ),
      ],
    ),
  ],
);
