import { NavLink, Outlet } from 'react-router-dom';

const links = [
  {
    to: '/minha-conta',
    label: 'Minha conta',
    end: true,
    sublinks: [
      {
        to: '/minha-conta/informacoes-pessoais',
        label: 'Informações pessoais',
        end: true,
        sublinks: null,
      },

      {
        to: '/minha-conta/enderecos',
        label: 'Endereços',
        end: true,
        sublinks: null,
      },
      {
        to: '/minha-conta/loja',
        label: 'Minha loja',
        end: true,
        sublinks: null,
      }
    ],
  },
];

export function MyAccountLayout() {
  return (
    <div className="flex gap-6 min-h-screen bg-gray-200">
      <aside className="w-56 min-h-screen absolute bg-white">
        <nav className="flex flex-col">
          {links.map((link) => (
            <div key={link.to} className="flex flex-col">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded px-3 py-4 ${isActive ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'}`
                }
              >
                {link.label}
              </NavLink>

              {link.sublinks && (
                <div className="flex flex-col">
                  {link.sublinks.map((sublink) => (
                    <NavLink
                      key={sublink.to}
                      to={sublink.to}
                      end={sublink.end}
                      className={({ isActive }) =>
                        `px-3 py-3 ${isActive ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50'}`
                      }
                    >
                      {sublink.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <section className="flex-1">
        <div className="w-fit mx-auto flex flex-col items-start mt-12 bg-white p-6 rounded">
          <Outlet />
        </div>
      </section>
    </div>
  );
}