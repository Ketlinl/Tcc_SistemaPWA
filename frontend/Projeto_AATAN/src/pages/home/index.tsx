import Image from 'next/image'
import Header from '../../components/Header'

import  Link from 'next/link'
import {
  Container,
  HeaderContainer,
  Highlights,
  Carousel,
  Menu,
  MenuItemContainer,
  MenuItemButton,
  MenuItemTitle,
  TabMenu,
  Card,
  CardButton,
  CardText,
  CardTitle,
  CardContent,
  CardImageContainer,
  HighlightsHeader,
  HighlightsTitle,
  HighlightsSeeMore,
  HighlightsSeeMoreText,
  HighlightsSeeMoreIcon,
  HighlightsContent,
  HighlightsPrimaryImage,
  HighlightsSecondaryImage,
  PageContainer,
  TabMenuHomeButton,
  TabMenuHomeButtonContainer,
  TabMenuItem,
  Spacer
} from '../../styles/pages/Home'

interface MenuItemProps {
  title: string
  imageSrc: string
  firstColorHex: string
  secondColorHex: string
  href:string
}

function MenuItem ({ title, imageSrc, firstColorHex, secondColorHex,href }: MenuItemProps) {
  return (
    <MenuItemContainer>
      <MenuItemButton firstColorHex={firstColorHex} secondColorHex={secondColorHex}>
        <Image src={imageSrc} width="100%" height="100%" objectFit="contain" />
      </MenuItemButton>
      <MenuItemTitle>{title}</MenuItemTitle>
    </MenuItemContainer>
  )
}

export default function Home () {
  return (
    <PageContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <Spacer />
        <Carousel>
          <Card>
            <CardImageContainer>
              <Image src="/images/animals/19.png" layout="fill" objectFit="contain" objectPosition="right center" />
            </CardImageContainer>
            <CardContent>
              <CardTitle>
                Seja Bem-Vindo!
                </CardTitle>
              <CardText>
                Veja a importância da adoção
                </CardText>
              <CardButton>
                Veja Agora!
                </CardButton>
            </CardContent>
          </Card>
        </Carousel>
        <Spacer />
        <Menu>
          <MenuItem
            title="Animais"
            imageSrc="/images/icons/icon-pets.png"
            firstColorHex="#FF885A"
            secondColorHex="#FE6347"
            href="../signUpAdm"
            
          />
        
          <MenuItem
            title="Eventos"
            imageSrc="/images/icons/icon-calendar-day.png"
            firstColorHex="#71D4FE"
            secondColorHex="#40B0F9"
            href="../signUpAdm"
            
          />
      
       
          <MenuItem
            title="Doação"
            imageSrc="/images/icons/icon-hand-holding-heart.png"
            firstColorHex="#FEB940"
            secondColorHex="#F99327"
            href="../signUpAdm"
          />
          <MenuItem
            title="Voluntariado"
            imageSrc="/images/icons/icon-users.png"
            firstColorHex="#59E48A"
            secondColorHex="#2AC975"
            href="../signUpAdm"
          />

        </Menu>
        <Spacer />
        <Highlights>
          <HighlightsHeader>
            <HighlightsTitle>
              Destaques
              </HighlightsTitle>
            <HighlightsSeeMore>
              <HighlightsSeeMoreText>
                Ver mais
                </HighlightsSeeMoreText>
              <HighlightsSeeMoreIcon>
                <Image src="/images/icons/icon-chevron-left.png" width="10" height="10" objectFit="contain" />
              </HighlightsSeeMoreIcon>
            </HighlightsSeeMore>

          </HighlightsHeader>
          <HighlightsContent>
            <HighlightsPrimaryImage>
              <Image src="/images/animals/3.jpg" layout="fill" objectFit="cover" />
            </HighlightsPrimaryImage>
            <HighlightsSecondaryImage>
              <Image src="/images/animals/2.jpg" layout="fill" objectFit="cover" />
            </HighlightsSecondaryImage>
            <HighlightsSecondaryImage>
              <Image src="/images/animals/16.jpg" layout="fill" objectFit="cover" />
            </HighlightsSecondaryImage>
          </HighlightsContent>
        </Highlights>
      </Container>
      <TabMenu>
        <TabMenuItem>
          <Image src="/images/icons/icon-user-alt.png" layout="fill" objectFit="contain" />
        </TabMenuItem>
        <TabMenuItem>
          <Image src="/images/icons/icon-heart.png" layout="fill" objectFit="contain" />
        </TabMenuItem>
        <TabMenuHomeButtonContainer>
          <TabMenuHomeButton>
            <Image src="/images/icons/icon-home-circle.png" layout="fill" objectFit="contain" />
          </TabMenuHomeButton>
        </TabMenuHomeButtonContainer>
        <TabMenuItem>
          <Image src="/images/icons/icon-comments.png" layout="fill" objectFit="contain" />
        </TabMenuItem>
        <TabMenuItem>
          <Image src="/images/icons/icon-info-circle.png" layout="fill" objectFit="contain" />
        </TabMenuItem>
      </TabMenu>
    </PageContainer>

  )
}
