import EmptyState from '../components/EmptyState'
import ClientOnly from '../components/ClientOnly'
import FavoritesClient from './FavoritesClient'

import getCurrentUser from '../actions/getCurrentUser'
import getFavoriteListigns from '../actions/getFavoriteListings'

const FavoritesPage = async () => {
  const listings = await getFavoriteListigns()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorites listings."
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default FavoritesPage
