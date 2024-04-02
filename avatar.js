function updateAvatar() {
    const avatarColor = document.getElementById('avatarColor').value;
    const avatarHairstyle = document.getElementById('avatarHairstyle').value;
    const avatarClothing = document.getElementById('avatarClothing').value;

    const avatarPreview = document.getElementById('avatarPreview');
    avatarPreview.style.backgroundColor = avatarColor;

    // Load hairstyle image dynamically
    const hairstyleImage = document.createElement('img');
    hairstyleImage.src = `hairstyle/${avatarHairstyle}.png`; // Assuming images are in a folder named "hairstyles"
    hairstyleImage.alt = 'Hairstyle';

    // Load clothing image dynamically
    const clothingImage = document.createElement('img');
    clothingImage.src = `clothing/${avatarClothing}.jpeg`; // Assuming images are in a folder named "clothes"
    clothingImage.alt = 'Clothing';

    // Clear previous content
    avatarPreview.innerHTML = '';

    // Append images to avatarPreview
    avatarPreview.appendChild(hairstyleImage);
    avatarPreview.appendChild(clothingImage);
}
