import { clsx } from 'clsx'
import { Minus, Plus } from 'phosphor-react'
import { FC, HTMLAttributes } from 'react'

export interface SidebarRootProps extends HTMLAttributes<HTMLDivElement> {
  expanded?: boolean
  setExpanded?: () => void
}

const SidebarRoot: FC<SidebarRootProps> = ({
  children,
  className,
  expanded,
  setExpanded,
  ...rest
}) => {
  return (
    <aside
      className={clsx([
        className,
        'sticky top-0 flex h-screen flex-col border-r border-gray-300 transition-all duration-300 justify-between [&_*]:text-ellipsis [&_*]:whitespace-nowrap [&_*]:overflow-hidden',
        expanded ? 'w-56 px-4' : 'w-14 px-2 [&_span]:hidden',
      ])}
      {...rest}
    >
      {setExpanded && (
        <div
          className="flex items-center justify-center absolute -right-2.5 top-4 w-5 h-5 border-2 rounded cursor-pointer transition-colors7 text-gray-500 bg-gray-100 border-gray-400 hover:text-primary hover:bg-primary-100 hover:border-primary"
          onClick={setExpanded}
        >
          {expanded ? <Minus /> : <Plus />}
        </div>
      )}
      {children}
    </aside>
  )
}

SidebarRoot.displayName = 'Sidebar.Root'

export default SidebarRoot
