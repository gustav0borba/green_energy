import React from 'react'

export default function Navigation() {
    return (
        <nav className="mt-4">
          <ul>
            <li className="py-2">
              <a className="hover:text-[#f8f32b]" href="#">Home</a>
            </li>
            <li className="py-2">
              <a className="hover:text-[#f8f32b]" href="#">About</a>
            </li>
            <li className="py-2">
              <a className="hover:text-[#f8f32b]" href="#">Services</a>
            </li>
            <li className="py-2">
              <a className="hover:text-[#f8f32b]" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      );
    }