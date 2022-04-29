import React from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ borderColor: match?"#blue":"",borderBottom: match?"1px solid":"" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        
      </div>
    );
  }

export default CustomLink;