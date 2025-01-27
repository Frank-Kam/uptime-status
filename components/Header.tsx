import { Container, Group, Text } from '@mantine/core'
import classes from '@/styles/Header.module.css'
import { pageConfig } from '@/uptime.config'
import Image from "next/image";

export default function Header() {
  const linkToElement = (link: { label: string; link: string; highlight?: boolean }) => {
    return (
      <a
        key={link.label}
        href={link.link}
        target="_blank"
        className={classes.link}
        data-active={link.highlight}
      >
        {link.label}
      </a>
    )
  }

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div>
          <a href="https://status.frankk.uk" target="_blank">
            <Text
              size="xl"
              span
              fw={700}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              Frank Status page
            </Text>
          </a>
        </div>

        <Group gap={5} visibleFrom="sm">
          {pageConfig.links.map(linkToElement)}
        </Group>

        <Group gap={5} hiddenFrom="sm">
          {pageConfig.links.filter((link) => (link as any).highlight).map(linkToElement)}
        </Group>
      </Container>
    </header>
  )
}
